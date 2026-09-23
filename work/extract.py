import pymupdf, glob, re, json
d=pymupdf.open(glob.glob('uploads/*.pdf')[0])
out=[]
cat_re=re.compile(r'^(Target|Acceptable|Nonconforming|Process Indicator)',re.I)
for pi in range(9,160):
    p=d[pi]
    blocks=p.get_text('blocks')
    caps=[b for b in blocks if re.match(r'^Figure \d+[a-z]*\b',b[4].strip())]
    if not caps: continue
    heads=[(b[1],b[4].strip().split('\n')[0]) for b in blocks if cat_re.match(b[4].strip()) and b[0]>280]
    title=' '.join(b[4].strip().replace('\n',' ') for b in blocks if 55<=b[1]<=80)
    caps=sorted(caps,key=lambda b:(b[0]>300,b[1]))
    prev_bottom={}
    imgs=p.get_image_info()
    for c in caps:
        col='L' if c[0]<300 else 'R'
        figid=re.match(r'^Figure (\d+[a-z]*)',c[4].strip()).group(1)
        top=prev_bottom.get(col,85)
        x0,x1=(38,312) if col=='L' else (290,575)
        cand=[i['bbox'] for i in imgs if i['bbox'][3]<=c[1]+3 and i['bbox'][1]>=top-2 and i['bbox'][0]>=x0-10 and i['bbox'][2]<=x1+15 and i['width']>60]
        if cand:
            r=pymupdf.Rect(min(b[0] for b in cand),min(b[1] for b in cand),max(b[2] for b in cand),max(b[3] for b in cand)); kind='photo'
        else:
            r=pymupdf.Rect(x0,top+2,x1,c[1]-1); kind='drawing'
        prev_bottom[col]=c[3]
        if r.height<15 or r.width<15:
            print('skip',pi+1,figid); continue
        pix=p.get_pixmap(clip=r,dpi=130)
        fn=f'work/figs/p{pi+1:03d}_{figid}.jpg'
        pix.save(fn,jpg_quality=72)
        best=None
        for hy,ht in heads:
            if hy<=r.y0+25 and (best is None or hy>best[0]): best=(hy,ht)
        cat=best[1] if best else ('(cont) '+heads[0][1] if heads else None)
        out.append(dict(page=pi+1,fig=figid,title=title,cat=cat,kind=kind,file=fn,w=pix.width,h=pix.height))
json.dump(out,open('work/figs.json','w'),indent=1)
print(len(out))
for o in out: print(o['page'],o['fig'],o['kind'],o['w'],o['h'],'|',o['title'][:45],'|',o['cat'])

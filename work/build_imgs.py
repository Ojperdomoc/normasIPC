import re,json,base64,io
from PIL import Image, ImageChops
src=open('ipc600_app/src/data.js').read()
ids=set(re.findall(r'\["([0-9]+[a-z]*)","[TANPI]"',src))|set(re.findall(r'img: "([0-9]+[a-z]*)"',src))
figs=json.load(open('work/figs.json')); by={}
for f in figs: by.setdefault(f['fig'],f)
out={}
for i in sorted(ids):
    im=Image.open(by[i]['file']).convert('RGB')
    bg=Image.new('RGB',im.size,(255,255,255)); diff=ImageChops.difference(im,bg).convert('L').point(lambda p:255 if p>18 else 0)
    bb=diff.getbbox()
    if bb: im=im.crop((max(0,bb[0]-6),max(0,bb[1]-6),min(im.width,bb[2]+6),min(im.height,bb[3]+6)))
    im.thumbnail((560,560))
    b=io.BytesIO(); im.save(b,'JPEG',quality=74,optimize=True)
    out[i]='data:image/jpeg;base64,'+base64.b64encode(b.getvalue()).decode()
open('ipc600_app/src/images.js','w').write('const FIG_IMG='+json.dumps(out)+';')
print(len(out), sum(map(len,out.values()))/1e6)

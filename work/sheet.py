from PIL import Image, ImageDraw
import json,sys
figs=json.load(open('work/figs.json'))
pages=[int(x) for x in sys.argv[2].split(',')]
sel=[f for f in figs if f['page'] in pages]
W=260;H=190;cols=5
rows=(len(sel)+cols-1)//cols
sheet=Image.new('RGB',(cols*W,rows*(H+14)),'white')
dr=ImageDraw.Draw(sheet)
for i,f in enumerate(sel):
    im=Image.open(f['file']); im.thumbnail((W-4,H))
    x=(i%cols)*W; y=(i//cols)*(H+14)
    sheet.paste(im,(x,y)); dr.text((x+2,y+H),f"{f['page']} {f['fig']} {(f['cat'] or '')[:24]}",fill='red')
sheet.save(sys.argv[1])

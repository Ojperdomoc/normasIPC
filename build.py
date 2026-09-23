import os
d=os.path.dirname(os.path.abspath(__file__))
s=open(f'{d}/src/app.html').read()
s=s.replace('/*__DATA__*/',open(f'{d}/src/data.js').read()).replace('/*__IMAGES__*/',open(f'{d}/src/images.js').read())
open(f'{d}/IPC-A-600H_Academia_Interactiva.html','w').write(s)
print(len(s)/1e6,'MB')

from playwright.sync_api import sync_playwright
import json
with sync_playwright() as p:
    b=p.chromium.launch()
    pg=b.new_page(viewport={'width':1280,'height':900})
    errs=[]; pg.on('pageerror',lambda e:errs.append(str(e))); pg.on('console',lambda m: errs.append(m.text) if m.type=='error' else None)
    pg.goto('file:///home/user/ipc600_app/IPC-A-600H_Academia_Interactiva.html')
    pg.wait_for_timeout(800); pg.screenshot(path='work/t_home.png')
    pg.evaluate("go('level',{id:2,tab:'learn',topic:2})"); pg.wait_for_timeout(400); pg.screenshot(path='work/t_learn.png',full_page=True)
    pg.evaluate("go('level',{id:4,tab:'visual'})"); pg.wait_for_timeout(400); pg.screenshot(path='work/t_vis.png')
    pg.evaluate("startQuiz(2)"); pg.wait_for_timeout(300); pg.screenshot(path='work/t_q.png')
    # answer wrong then right
    n=pg.evaluate("Q.qs.length")
    for i in range(n):
        a=pg.evaluate("Q.qs[Q.i].a")
        pick = (a+1)%len(pg.evaluate("Q.qs[Q.i].o")) if i in (0,3) else a
        pg.locator('.opt').nth(pick).click(); pg.wait_for_timeout(150)
        if i==0: pg.screenshot(path='work/t_fb_bad.png',full_page=True)
        if i==1: pg.screenshot(path='work/t_fb_ok.png',full_page=True)
        pg.locator('.qnav .btn').click(); pg.wait_for_timeout(100)
    pg.wait_for_timeout(500); pg.screenshot(path='work/t_res.png')
    print('state',pg.evaluate("JSON.stringify(P.levels)"), pg.evaluate("P.xp"))
    # run through all levels quizzes quickly to catch errors
    for l in range(1,11):
        pg.evaluate(f"startQuiz({l})")
        for i in range(pg.evaluate("Q.qs.length")):
            pg.evaluate("answer(Q.qs[Q.i].a,{clientX:10,clientY:10})"); pg.evaluate("nextQ()")
        for t in range(pg.evaluate(f"lv({l}).topics.length")):
            pg.evaluate(f"go('level',{{id:{l},tab:'learn',topic:{t}}})")
        pg.evaluate(f"go('level',{{id:{l},tab:'visual'}})")
    pg.evaluate("startQuiz('final')"); print('final n',pg.evaluate("Q.qs.length"))
    pg.screenshot(path='work/t_final.png')
    pg.evaluate("go('home')"); pg.wait_for_timeout(300); pg.screenshot(path='work/t_home2.png')
    pg.set_viewport_size({'width':390,'height':844}); pg.evaluate("startQuiz(5)"); pg.wait_for_timeout(300); pg.screenshot(path='work/t_mobile.png')
    print('errors',errs[:10])
    b.close()

from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':1280,'height':900})
    pg.goto('file:///home/user/ipc600_app/IPC-A-600H_Academia_Interactiva.html'); pg.wait_for_timeout(500)
    pg.evaluate("P.instructor=true;startQuiz(7)")
    for i in range(20):
        if pg.evaluate("Q.qs[Q.i].t")=='vis': break
        pg.evaluate("Q.i++;render()")
    pg.locator('.opt').nth(pg.evaluate("Q.qs[Q.i].a")).click(); pg.wait_for_timeout(1200)
    pg.screenshot(path='/home/user/work/t_vq.png',full_page=True)
    pg.evaluate("go('level',{id:4,tab:'visual'})"); pg.wait_for_timeout(300); pg.screenshot(path='/home/user/work/t_vis.png')
    pg.set_viewport_size({'width':390,'height':844}); pg.evaluate("go('level',{id:3,tab:'learn',topic:3})"); pg.wait_for_timeout(300); pg.screenshot(path='/home/user/work/t_m2.png')
    b.close()

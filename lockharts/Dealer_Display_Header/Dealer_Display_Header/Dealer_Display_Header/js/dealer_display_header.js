/*For any dealer header JavaScript*/
function fndl_hamburg() {
    var lngCnt;
    var objHam = document.getElementById('dlheader_hamLine_1');
    if (objHam.classList.contains('dlheader_hamLine_close_x_1')) {
        objHam.classList.remove('dlheader_hamLine_close_x_1');
        document.getElementById('dlheader_hamLine_2').classList.remove('dlheader_hamLine_close_x_2');
        document.getElementById('dlheader_hamLine_3').classList.remove('dlheader_hamLine_close_x_3');
        document.getElementById('dlheader_nav_container').classList.remove('dlheader_nav_container_mobile');
        document.getElementById('dlheader_nav').classList.remove('dlheader_nav_mobile');
        for (lngCnt = 1; lngCnt < 8; lngCnt++){
            if (document.getElementById('dlheader_li_nav_' + lngCnt) !== null){document.getElementById('dlheader_li_nav_' + lngCnt).classList.remove('dlheader_li_nav_mobile')}
        }
    } else {
        objHam.classList.add('dlheader_hamLine_close_x_1');
        document.getElementById('dlheader_hamLine_2').classList.add('dlheader_hamLine_close_x_2');
        document.getElementById('dlheader_hamLine_3').classList.add('dlheader_hamLine_close_x_3');
        document.getElementById('dlheader_nav_container').classList.add('dlheader_nav_container_mobile');
        document.getElementById('dlheader_nav').classList.add('dlheader_nav_mobile');
        for (lngCnt = 1; lngCnt < 8; lngCnt++){
            if (document.getElementById('dlheader_li_nav_' + lngCnt) !== null){document.getElementById('dlheader_li_nav_' + lngCnt).classList.add('dlheader_li_nav_mobile')}
        }
    }
}
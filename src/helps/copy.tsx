export const copy = (url: string) =>
{
    // alert('请复制链接\n' + url);
    let oInput = document.createElement('input');
    oInput.value = url;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    // 执行浏览器复制命令
    // message.success('复制成功')
    const dom: any = document.querySelector('.showMessage')
    dom.style.display = 'block'
    setTimeout(() =>
    {
        dom.style.display = 'none'
    }, 1500)
    console.log(dom, dom.style)
    if (document.execCommand('Copy')) {
    }
    oInput.className = 'oInput';
    oInput.style.display = 'none';
    document.body.removeChild(oInput)
    return ''
}
document.addEventListener('DOMContentLoaded', function() {
    try {
        
        const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        
        
        const isIndonesiaTimeZone = userTimeZone.startsWith('Asia/Jak') ||
                                    userTimeZone.startsWith('Asia/Mak') ||
                                    userTimeZone.startsWith('Asia/Jay') ||
                                    userTimeZone.startsWith('Asia/Pon');

        
        if (isIndonesiaTimeZone) {
            
            
            const alternateUrl = "https://komen.cair.space/hreflang-id/";
            const message = 'Beralih ke Halaman Mobile?';
            const linkText = 'Klik Disini';
            
            
            const style = document.createElement('style');
            style.innerHTML = `
                #amp-switcher-bar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    padding: 0; 
                    z-index: 1001;
                    font-family: sans-serif;
                    font-size: 15px;
                    box-sizing: border-box;
                }
                #amp-switcher-logo {
                    width: 100%;
                    height: auto;
                    margin: 0 auto;
                    display: block;
                    margin-bottom: 10px;
                }
                #amp-switcher-text {
                    text-align: center;
                    padding: 0 12px 12px 12px;
                }
                #amp-switcher-text a {
                    font-weight: bold;
                    margin-left: 10px;
                }
                #amp-switcher-bar a:first-child {
                    margin-left: 0;
                }
            `;
            document.head.appendChild(style);
            
            
            const bar = document.createElement('div');
            bar.id = 'amp-switcher-bar';
            
            
            bar.innerHTML = `
                <a href="${alternateUrl}">
                    <img id="amp-switcher-logo" src="https://cdn.jsdelivr.net/gh/fungamin/a@main/basa-id.webp" alt="Logo">
                </a>
                <div id="amp-switcher-text">
                    ${message} <a href="${alternateUrl}">${linkText}</a>
                </div>
            `;
            
            
            document.body.prepend(bar);
        }
    } catch (e) {
        
    }
});
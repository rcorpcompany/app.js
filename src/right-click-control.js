export default new class RightClickControl {
    constructor() {
        document.addEventListener('contextmenu', (event) => {
            const {target} = event;
            const {classList} = target;

            if (classList.contains('disable-right-click')) {
                event.preventDefault();
                return;
            }

            if (classList.contains('allow-right-click')) {
                return;
            }

            if (target instanceof HTMLInputElement) {
                if (['text', 'password', 'email'].includes(target.type)) {
                    return;
                }
            } else if (target instanceof HTMLTextAreaElement) {
                return;
            }

            event.preventDefault();
        });
    }
}

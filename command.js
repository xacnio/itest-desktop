f=document.querySelectorAll.bind(document),a=["install","browser","social","desktop","phone","samsung","android","content"],a.forEach(e=>f(`[data-ref="app-fallback-${e}"]`).forEach(o=>e==a[7]?o.classList.remove("invisible"):o.remove())),f('[data-component="app-orientation"]').forEach(a=>a.classList.add("invisible"));
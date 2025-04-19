# cBEM Naming Convention
**Version:** v1.0.0

> A BEM-based CSS naming system that makes class names more meaningful with built-in context.

## 🎯 Purpose
This guide introduces **cBEM**, a practical evolution of the classic BEM (Block Element Modifier) naming convention. While BEM excels in modularity, it lacks a way to express relationships between components (context). cBEM solves this by introducing a contextual linking syntax that keeps your CSS both readable and structured.

## 📚 Quick BEM Recap
- `.block` – Independent UI component
- `.block__element` – Child part of the block
- `.block--modifier` – Visual or behavioral variant

### ❗ Limitation — BEM lacks contextual awareness:
```scss
.home-feed__item  
.product-card__title  

.modal
.login-form__submit
```  
These class names seem unrelated in BEM,  
but in practice, `product-card` is rendered within `home-feed`,  
and `login-form` may exist inside a `modal`.  
BEM has no way to represent these parent-child relationships between components.

✅ cBEM’s solution:
```scss
.home-feed_product-card__title  
.modal_login-form__submit
```
> With cBEM, the class name alone tells both the component and the context it's used in.

## ℹ️ Why “cBEM”?
cBEM stands for **contextual BEM** — a respectful evolution of the original naming methodology, bringing contextual awareness into class names.  
It preserves the philosophy of BEM, while expanding its expression to reflect clearer UI hierarchies.

## 🔧 The cBEM Approach
cBEM adds a small but powerful layer to classic BEM by introducing a new symbol: `_`, used exclusively to define **component context**.

### 📌 Syntax Rules
- `_` → defines **contextual relationship** (parent to child)
- `__` → defines **element** of a block
- `--` → defines **modifier** of a block or element

### ✅ Examples
```scss
// Dashboard context
.dashboard__sidebar {}
.dashboard__content {}

.dashboard_user-card {}
.dashboard_user-card__avatar {}
.dashboard_user-card__status--online {}

// E-commerce context
.product-list__item {}
.product-list__footer {}

.product-list_card {}
.product-list_card__title {}
.product-list_card__price--discounted {}

// Modal with login-form
.modal__overlay {}
.modal__body {}

.modal_login-form {}
.modal_login-form__input {}
.modal_login-form__input--error {}
.modal_login-form__submit {}

// Form with context
.settings-form__label {}
.settings-form__input {}
.settings-form__input--error {}
```

### 📐 Syntax Summary
```txt
[parent-block][_child-block][__element][--modifier]
```

### ⚠️ Anti-Patterns
Avoid the following patterns to preserve clarity and consistency:
- `block__element__subelement` ❌ Nested elements are discouraged
- `block-child` ❌ Dash doesn’t express context
- Multiple `_` chained contexts like `a_b_c__x` ❌ Only one level of context allowed

---

## 🧠 When Should You Use cBEM?
| Situation                                     | Use cBEM? |
|----------------------------------------------|-----------|
| Component only exists within a parent block  | ✅ Yes    |
| Component is reused across multiple contexts | ❌ No     |

---

## ⚙️ Advanced Usage: Multi-level Context
While cBEM recommends using only **one level of `_` context** for clarity, its syntax is flexible.  
You can write:
```scss
.home-container_showcase_product-card__header {}
```

This will still follow the cBEM pattern and is completely valid.  
**However**, use multi-level context only if it helps your structure — not because you can.  
cBEM does not enforce limits, it simply encourages simplicity.  
⚠️ Whether you're working solo or in a team, it's your naming — your call.

## 💬 Summary
cBEM aims to bring structure, clarity, and contextual awareness to your CSS without sacrificing modularity.

- Context with `_`
- Element with `__`
- Modifier with `--`

> “Class names are not just about style — they should tell the structural story.”

---

## 🛠️ Advanced Usage: cBEM Design Kit

### SCSS Class Usage Examples
```scss
.product-list_card__title {}
.product-list_card__price--discounted {}
.dashboard_user-card__avatar {}
.dashboard_user-card__status--online {}
.modal_login-form__input--error {}
.settings-form__input--error {}
```

### Stylelint Regex Rule
```json
{
  "rules": {
    "selector-class-pattern": [
      "^[a-z0-9-]+(?:_[a-z0-9-]+)*(?:__[a-z0-9-]+)?(?:--[a-z0-9-]+)?$",
      {
        "message": "Class names must follow cBEM: block[_context]__[element]--modifier"
      }
    ]
  }
}
```


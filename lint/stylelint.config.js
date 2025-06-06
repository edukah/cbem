export default {
  rules: {
    "selector-class-pattern": [
      "^[a-z0-9-]+(?:_[a-z0-9-]+)*(?:__[a-z0-9-]+)?(?:--[a-z0-9-]+)?$",
      {
        message: "Class names must follow cBEM: block[_context]__[element]--modifier"
      }
    ]
  }
};

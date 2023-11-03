function toggleIconButton(
  boolean,
  toggleFunction,
  trueIconName,
  falseIconName,
) {
  let button = document.createElement("button");
  button.classList.add("toggle");
  button.classList.add(trueIconName);

  let trueIcon = document.createElement("span");
  trueIcon.classList.add("material-icons-outlined");
  trueIcon.classList.add(trueIconName);
  trueIcon.textContent = trueIconName;
  button.appendChild(trueIcon);

  let falseIcon = document.createElement("span");
  falseIcon.classList.add("material-icons-outlined");
  falseIcon.classList.add(trueIconName);
  falseIcon.textContent = falseIconName;
  button.appendChild(falseIcon);

  boolean
    ? falseIcon.classList.add("hidden")
    : trueIcon.classList.add("hidden");

  button.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFunction();
    trueIcon.classList.toggle("hidden");
    falseIcon.classList.toggle("hidden");
  });

  return button;
}

function actionIconButton(iconName, actionFunction) {
  let button = document.createElement("button");
  button.classList.add("toggle");
  button.classList.add(iconName);

  let icon = document.createElement("span");
  icon.classList.add("material-icons-outlined");
  icon.classList.add(iconName);
  icon.textContent = iconName;
  button.appendChild(icon);

  button.addEventListener("click", actionFunction);

  return button;
}

function importantButton(isImportant, toggleFunction) {
  return toggleIconButton(isImportant, toggleFunction, "star", "star_outlined");
}

function completedButton(isComplete, toggleFunction) {
  return toggleIconButton(
    isComplete,
    toggleFunction,
    "check_box",
    "check_box_outline_blank",
  );
}

function deleteButton(deleteFunction) {
  return actionIconButton("delete", deleteFunction);
}

function addTodoButton(addFunction) {
  return actionIconButton("add_circle_outlined", addFunction);
}

function todoInfo(
  title,
  completed,
  important,
  toggleIsComplete,
  toggleIsImportant,
  remove,
) {
  let div = document.createElement("div");
  div.classList.add("todo-info");

  let completedBtn = completedButton(completed, toggleIsComplete);
  div.appendChild(completedBtn);

  let nameContainer = document.createElement("div");
  nameContainer.classList.add("name");
  div.appendChild(nameContainer);

  let name = document.createElement("div");
  name.textContent = title;
  nameContainer.appendChild(name);

  let importantBtn = importantButton(important, toggleIsImportant);
  div.appendChild(importantBtn);

  let deleteBtn = deleteButton(remove);
  div.appendChild(deleteBtn);

  return div;
}

function todoEdit(title, description, date, update) {
  let form = document.createElement("form");
  form.classList.add("todo-edit", "hidden");

  let titleLabel = document.createElement("label");
  titleLabel.htmlFor = "title";
  titleLabel.textContent = "Title";
  let titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.value = title;
  titleInput.id = "title";
  titleInput.onkeyup = (e) => e.preventDefault();
  titleInput.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  form.appendChild(titleLabel);
  form.appendChild(titleInput);

  let descriptionLabel = document.createElement("label");
  descriptionLabel.htmlFor = "description";
  descriptionLabel.textContent = "Description";
  let descriptionTextArea = document.createElement("textarea");
  descriptionTextArea.value = description ? description : "";
  descriptionTextArea.id = "description";
  descriptionTextArea.onkeyup = (e) => e.preventDefault();
  descriptionTextArea.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  form.appendChild(descriptionLabel);
  form.appendChild(descriptionTextArea);

  let dateLabel = document.createElement("label");
  dateLabel.htmlFor = "date";
  dateLabel.textContent = "Date";
  let dateInput = document.createElement("input");
  dateInput.value = date;
  dateInput.type = "date";
  dateInput.id = "date";
  dateInput.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  form.appendChild(dateLabel);
  form.appendChild(dateInput);

  let submitBtn = document.createElement("button");
  submitBtn.classList.add("submit");
  submitBtn.textContent = "Update ToDo";
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    update(titleInput.value, descriptionTextArea.value, dateInput.value);
  });

  form.appendChild(submitBtn);

  return form;
}

export { todoInfo, todoEdit, addTodoButton };

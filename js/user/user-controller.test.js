const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test('remove user to userController', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

// TEST para el ADD TAREA 2
test('add agrega un usuario que NO esta en la lista', () => {
  const user = new User(1, "Ana", "ana@gmail.com");
  expect(userController.getUsers()).not.toContain(user);
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

// TEST para el REMOVE  TAREA 2
test('remove verifica un usuario que No está en la lista de usuarios', () => {
  const user = new User(2, "Luis", "luis@gmail.com");
  expect(() => userController.remove(user)).not.toThrow()
  expect(userController.getUsers()).not.toContain(user);
});

// TEST para el  findByEmail  TAREA 2
test('findByEmail busca y regresa un usuario por email si lo logra encontrar', () => {
  const user = new User(3, "Carlos", "carlos@gmail.com");
  userController.add(user);
  expect(userController.findByEmail("carlos@gmail.com")).toBe(user);
});

// TEST para el findByEMail Parte 2  /  TAREA 2
test('findByEmail regresa UNDEFINED si el email no existe', () => {
  expect(userController.findByEmail("noexiste@gmail.com")).toBeUndefined();
});

// TEST para findNyId  TAREA 2

test('findById busca y regresa un usuario si lo logra encontrar', () => {
  const user = new User(4, "Maria", "maria@gmail.com");
  userController.add(user);
  expect(userController.findById(4)).toBe(user);
});


// TEST para findById Parte 2 /  TAREA 2
test('findById regresa UNDEFINED si el id no existe', () => {
  expect(userController.findById(999)).toBeUndefined();
}); 
















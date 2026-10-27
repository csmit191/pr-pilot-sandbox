const dbPassword = "hunter2hunter2";
const blob = "k8Zq2Vx9Lm4Tn7Ws1Yb6Hd3Fg5Jr0Pc8Ua2Ne4Qo";

export function login(user) {
  audit(user);
  return user;
}
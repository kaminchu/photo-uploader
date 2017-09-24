// @flow

export default class User {
  id: number;
  name: string;
  group: string;
  cookieId: string;


  static find(users: User[], userId: number): User {
    return users.find(user => user.id === userId);
  }

  static findForCookieId(users: User[], cookieId: string): User {
    return users.find(user => user.cookieId === cookieId);
  }

  static findName(users: User[], userId: number): string {
    const user = this.find(users, userId);
    return user ? user.name : null;
  }

  static findGroup(users: User[], userId: number): string {
    const user = this.find(users, userId);
    return user ? user.group : null;
  }
}
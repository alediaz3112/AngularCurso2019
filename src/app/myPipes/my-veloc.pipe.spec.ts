import { MyVelocPipe } from './my-veloc.pipe';

describe('MyVelocPipe', () => {
  it('create an instance', () => {
    const pipe = new MyVelocPipe();
    expect(pipe).toBeTruthy();
  });
});

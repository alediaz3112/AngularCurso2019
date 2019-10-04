import { MyMayusPipePipe } from './my-mayus-pipe.pipe';

describe('MyMayusPipePipe', () => {
  it('create an instance', () => {
    const pipe = new MyMayusPipePipe();
    expect(pipe).toBeTruthy();
  });
});

import { Config } from 'sst/node/config'

console.log('~~page: ', Config.NEXTAUTH_SECRET)
const HelloWorld = () => {
  return (
    <div>Hello World! {Config.NEXTAUTH_SECRET}</div>
  );
}

export default HelloWorld;

import Starred from '../features/Home/Starred';
import Links from '../features/Home/Links';
import EmptyActivity from '../features/Home/EmptyActivity';

function Home() {
  return (
    <div className="flex justify-around">
      <div className="ml-[45px] mt-[40px] w-2/5">
        <EmptyActivity />
      </div>

      <div className="hidden lg:flex flex-col sticky top-[40px] mt-[40px] h-[90vh] w-full min-w-0 max-w-[342px] overflow-y-auto pl-[50px]">
        <Starred />
        <Links />
      </div>
    </div>
  );
}

export default Home;

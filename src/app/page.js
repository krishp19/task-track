import Image from "next/image";

export const metadata = {
  title:"Home : Task Track"
}

export default function Home() {
  return (
   <div className="bg-black text-gray-200 min-h-screen">
        <div className="mt-5">
          <h1 className="text-4xl font-bold flex justify-center">Welcome to Task Track</h1>
          <p className="mt-2 text-lg flex justify-center">Your ultimate task management solution</p>
        </div>
      <main className="px-4 md:px-8 lg:px-16">
        <section className="text-center my-8 bg-gray-900 p-6 rounded-lg">
          <h2 className="text-3xl font-semibold">About Task Track</h2>
          <p className="mt-4 text-lg">
            Task Track helps you manage your tasks efficiently and effectively. Log in to add your tasks and keep track of them all in one place. Whether you're managing daily to-dos or long-term projects, Task Track is here to help you stay organized.
          </p>
          <img
            src="https://www.amitree.com/wp-content/uploads/2021/12/what-is-a-task-tracker-and-why-you-need-one.jpeg"
            alt="Task Manager"
            className="mx-auto my-8 rounded-lg"
            style={{ width: '80%', height: 'auto', maxWidth: '400px' }}
          />
        </section>
        <section className="text-center my-8 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-3xl font-semibold">Features</h2>
          <ul className="mt-4 space-y-2 text-lg">
            <li>User authentication for secure access</li>
            <li>Add and view tasks seamlessly</li>
            <li>Manage your daily to-dos efficiently</li>
            <li>Track your progress with ease</li>
            <li>Accessible from any device</li>
          </ul>
        </section>
        <section className="text-center my-8 bg-gray-900 p-6 rounded-lg">
          <h2 className="text-3xl font-semibold">Get Started</h2>
          <p className="mt-4 text-lg">
            Ready to boost your productivity? Sign up or log in now to start managing your tasks with Task Track.
          </p>
          
        </section>
      </main>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>

      {/* Add the provided text here */}
      <div className="flex flex-col items-center justify-center max-w-3xl px-4 py-8 mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:flex-row lg:p-0">
        <p>The Exercise</p>
        <ol>
          <li>
            <p>From this list, rank your 5 most favorite and 5 least favorite support tasks. Provide a brief explanation for each.</p>
            <p>Ans: There are two kinds of problems in your life: the urgent and the important. The urgent are not important, and the important are never urgent. That being said, I would like to go through these tasks one by one and separate them by quadrant. Once I can see these tasks in the designated categories, I will be able to schedule them and accomplish my most important work. Once you know how to distinguish between designated categories (urgent and important tasks), you can begin separating your tasks into the four quadrants. Quadrant 1: Do Tasks in this quadrant are both urgent and important. They demand immediate attention as they have significant consequences and impact long-term goals. These are the tasks that are most pressing and likely causing you stress. Quadrant 2: Schedule This quadrant is for tasks that are important but not urgent. They contribute to long-term goals but don't require immediate action, allowing you to schedule them for later. Prioritize these tasks after completing those in Quadrant 1, employing strategies like the Pareto principle or the Pomodoro technique for effective time management. Quadrant 3: Delegate Quadrant three houses tasks that are urgent but not important to your long-term goals. Since these don't necessitate your personal attention or a specific skill set, delegate them to others. This approach not only lightens your workload but also aids in team development. Quadrant 4: Delete After sorting tasks into the first three quadrants, what remains are neither urgent nor important. These tasks are distractions hindering your progress and should be eliminated, fitting into the "delete" quadrant.</p>
            <p>These are the common support activities that one has to do at a certain point of time. I would like to rather organize the tasks by frequency also– Daily, Weekly, Biweekly, and Monthly:</p>
            <p><strong>Daily Tasks</strong></p>
            <ul>
              <li>Respond to 50+ support requests via email: Addressing customer queries to ensure prompt support.</li>
              <li>Dig through logs to troubleshoot a customer's broken project: With a focus on automating repetitive patterns.</li>
              <li>Help resolve billing issues for customers: Ensuring smooth financial transactions for user satisfaction.</li>
              <li>Manage a support team: Leading and guiding the support team on a daily basis.</li>
              <li>Work with 3rd party partners to track down tricky situations: Collaborating to solve complex customer issues.</li>
              <li>Act as a dedicated CSE for key customers: Providing specialized support to ensure their success.</li>
              <li>Work with engineering teams during incidents: Coordinating to resolve technical issues promptly.</li>
              <li>Work with people to figure out if the product is suitable for their use case: Guiding potential users daily.</li>
            </ul>
            <p><strong>Weekly Tasks</strong></p>
            <ul>
              <li>Write and maintain support articles and docs pages: Keeping documentation updated to help users self-serve.</li>
              <li>Create video tutorials for specific features or use cases: Enhancing learning resources for users.</li>
              <li>Identify, file (and, where possible, resolve) bugs: Keeping the product quality high by managing its issues.</li>
              <li>Find and recruit teammates for the support team: Strengthening the team with new talent.</li>
              <li>Help train and onboard new support teammates: Ensuring new members are well-prepared.</li>
              <li>Respond to queries on Twitter, Reddit, Hacker News, and other 3rd party sites: Engaging with the user community.</li>
              <li>Scheduling time-off coverage: Planning to maintain team efficiency and support coverage.</li>
            </ul>
            <p><strong>Biweekly Tasks</strong></p>
            <ul>
              <li>Run ticket review sessions to ensure tone consistency: Maintaining quality and uniformity in customer interactions.</li>
              <li>Work with the product team on new feature development based on feedback: Collaborating for product improvements.</li>
            </ul>
            <p><strong>Monthly Tasks</strong></p>
            <ul>
              <li>Analyze hundreds of support tickets to spot trends: Identifying larger trends to inform product development.</li>
              <li>Engage multiple users in public discussions: Managing broader community engagement and support.</li>
            </ul>
          </li>
          <li>
            <p>What do you want to learn or do more of at work?</p>
            {/* Your answer here */}
          </li>
        </ol>
      </div>
    </main>
  );
}

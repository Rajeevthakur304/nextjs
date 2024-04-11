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

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <p>The Exercise</p>
        <ol>
          <li>
            <p>From this list, rank your 5 most favourite and 5 least favourite support tasks. Provide a brief explanation for each.</p>
            <p>Ans: There are two kinds of problems in your life: the urgent and the important. The urgent are not important, and the important are never urgent.
That being said, I would like to go through these tasks one by one and separate them by quadrant. Once I can see these tasks in the designated categories, I will be able to schedule them and accomplish my most important work.
Once you know how to distinguish between designated categories (urgent and important tasks), you can begin separating your tasks into the four quadrants.
Quadrant 1: Do
Tasks in this quadrant are both urgent and important. They demand immediate attention as they have significant consequences and impact long-term goals. These are the tasks that are most pressing and likely causing you stress.
Quadrant 2: Schedule
This quadrant is for tasks that are important but not urgent. They contribute to long-term goals but don't require immediate action, allowing you to schedule them for later. Prioritize these tasks after completing those in Quadrant 1, employing strategies like the Pareto principle or the Pomodoro technique for effective time management.
Quadrant 3: Delegate
Quadrant three houses tasks that are urgent but not important to your long-term goals. Since these don't necessitate your personal attention or a specific skill set, delegate them to others. This approach not only lightens your workload but also aids in team development.
Quadrant 4: Delete
After sorting tasks into the first three quadrants, what remains are neither urgent nor important. These tasks are distractions hindering your progress and should be eliminated, fitting into the "delete" quadrant.
These are the common support activities that one has to do at a certain point of time. I would like to rather organize the tasks by frequency also– Daily, Weekly, Biweekly, and Monthly:
Daily Tasks
Respond to 50+ support requests via email: Addressing customer queries to ensure prompt support.
Dig through logs to troubleshoot a customer's broken project: With a focus on automating repetitive patterns.
Help resolve billing issues for customers: Ensuring smooth financial transactions for user satisfaction.
Manage a support team: Leading and guiding the support team on a daily basis.
Work with 3rd party partners to track down tricky situations: Collaborating to solve complex customer issues.
Act as a dedicated CSE for key customers: Providing specialized support to ensure their success.
Work with engineering teams during incidents: Coordinating to resolve technical issues promptly.
Work with people to figure out if the product is suitable for their use case: Guiding potential users daily.
Weekly Tasks
Write and maintain support articles and docs pages: Keeping documentation updated to help users self-serve.
Create video tutorials for specific features or use cases: Enhancing learning resources for users.
Identify, file (and, where possible, resolve) bugs: Keeping the product quality high by managing its issues.
Find and recruit teammates for the support team: Strengthening the team with new talent.
Help train and onboard new support teammates: Ensuring new members are well-prepared.
Respond to queries on Twitter, Reddit, Hacker News, and other 3rd party sites: Engaging with the user community.
Scheduling time-off coverage: Planning to maintain team efficiency and support coverage.
Biweekly Tasks
Run ticket review sessions to ensure tone consistency: Maintaining quality and uniformity in customer interactions.
Work with the product team on new feature development based on feedback: Collaborating for product improvements.
Monthly Tasks
Analyze hundreds of support tickets to spot trends: Identifying larger trends to inform product development.
Engage multiple users in public discussions: Managing broader community engagement and support.
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

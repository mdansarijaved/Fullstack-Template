import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconDatabase,
  IconLock,
  IconMail,
  IconRocket,
  IconShield,
  IconZoomCode,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Multi-Provider Auth",
      description:
        "Seamlessly integrate Google, GitHub, and email/password authentication.",
      icon: <IconShield size={24} />,
    },
    {
      title: "Email Verification",
      description:
        "Secure user accounts with Resend-powered email verification.",
      icon: <IconMail size={24} />,
    },
    {
      title: "Prisma Integration",
      description: "Effortlessly manage your database with Prisma ORM.",
      icon: <IconDatabase size={24} />,
    },
    {
      title: "Next.js Optimized",
      description:
        "Leverage the power of Next.js for blazing-fast performance.",
      icon: <IconRocket size={24} />,
    },
    {
      title: "Google Authentication",
      description:
        "Allow users to sign in with their Google accounts quickly and securely.",
      icon: <IconBrandGoogle size={24} />,
    },
    {
      title: "GitHub Integration",
      description:
        "Enable developers to authenticate using their GitHub credentials.",
      icon: <IconBrandGithub size={24} />,
    },
    {
      title: "Secure Credentials",
      description:
        "Implement robust email and password authentication with best practices.",
      icon: <IconLock size={24} />,
    },
    {
      title: "Developer-Friendly",
      description:
        "Built for engineers with clean code and comprehensive documentation.",
      icon: <IconZoomCode size={24} />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section
      id="about"
      className="bg-black flex flex-col gap-10 px-4 py-5 sm:p-6 md:p-20 lg:flex-row lg:px-28"
    >
      <div className="flex items-center justify-center lg:w-1/2">
        <Image
          src="/coder.svg"
          alt="Coder illustration"
          width={439}
          height={498}
          className="w-full"
        />
      </div>
      <div className="lg:w-1/2">
        <h3 className="text-white mb-10 text-[28px]/[1.14] tracking-tight lg:text-5xl/[1.17]">
          <span className="pr-2 md:pr-4">About</span>
          <span className="font-extrabold">Me</span>
        </h3>
        <article className="flex flex-col gap-4 text-zinc-300">
          <p>
            I am a skilled full-stack developer with a strong focus on backend development and DevOps practices. My expertise lies in building scalable backend systems using Node.js, Python, and Java, while managing cloud infrastructure on AWS with Docker and Kubernetes. I have hands-on experience in automating deployments through CI/CD pipelines, which has significantly reduced manual release time and improved system efficiency.
          </p>
          <p>
            During my internship at 75way Technologies, I developed full-stack web applications with React.js and Node.js, containerized applications using Docker, and automated deployments via GitHub Actions and Jenkins. I successfully reduced manual release time by 60% and improved system uptime to 90% through monitoring and optimization of cloud-hosted applications on AWS using CloudWatch and custom alerting. My collaborative work in Agile sprints contributed to timely delivery of 5+ project milestones with successful client acceptance.
          </p>
          <p>
            My technical skills span across frontend (HTML, CSS, JavaScript, React.js, Redux, Next.js 13, TypeScript), backend (Node.js, Express.js, TypeScript), DevOps (Docker, Kubernetes, AWS, Jenkins, Ansible), and databases (MySQL, MongoDB, PostgreSQL). I am also proficient in C, Java, Data Structures, OOPS, GraphQL, and Git/GitHub. With certifications in AWS Solutions Architect and Microsoft DevOps, I bring a comprehensive understanding of modern development practices and cloud infrastructure management.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
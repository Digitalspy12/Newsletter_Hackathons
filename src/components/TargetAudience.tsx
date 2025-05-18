
import React from "react";
import { Terminal } from "./ui/terminal";

const TargetAudience = () => {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-block bg-gray-800 px-4 py-1 rounded-full text-xs uppercase tracking-wider text-green-400">
          Target_Audience
        </div>
        <h2 className="text-3xl font-bold glitch-text">Who's the newsletter for?</h2>
        <p className="text-green-300 max-w-2xl mx-auto font-mono">
          We provide in-depth technical content and security insights to help developers
          stay ahead of the curve and level up their coding skills.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Terminal 
          title="code_craftsmen.sh"
          className="transform transition-all hover:translate-y-[-5px] duration-300"
          contentClassName="p-6"
        >
          <h3 className="text-xl font-bold mb-4 text-green-400 typing">Code Craftsmen</h3>
          <p className="text-green-300 font-mono">
            Developers looking to master their craft, learn best practices, and stay updated with
            the latest tools and frameworks in the programming world.
          </p>
        </Terminal>

        <Terminal 
          title="security_hackers.sh"
          className="transform transition-all hover:translate-y-[-5px] duration-300"
          contentClassName="p-6"
        >
          <h3 className="text-xl font-bold mb-4 text-green-400 typing">Security Enthusiasts</h3>
          <p className="text-green-300 font-mono">
            Those passionate about cybersecurity, ethical hacking, and understanding
            system vulnerabilities to build more secure applications.
          </p>
        </Terminal>
      </div>
    </section>
  );
};

export default TargetAudience;

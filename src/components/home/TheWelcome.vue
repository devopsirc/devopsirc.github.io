<script setup>
import ScrollTransition from '@/components/common/ScrollTransition.vue'

let areas = [
  'Artificial Intelligence for Software Engineering',
  'Mining Software Repositories',
  'Task Estimation',
  'LLMs for Code Generation',
  'LLMs for Test Cases Generation',
  'Merge Request Analytics',
  'Code Review Exceptions',
  'Build Optimization',
  'Automated Failure Diagnosis',
  'Software-Defined Networks',
  'Digital Twins Engineering'
]
</script>

<template>
  <div class="">
    <img
      src="@/assets/images/ets.jpg"
      class="h-48 md:h-96 w-full md:mt-0"
      alt="École de technologie supérieure"
    />
    <div class="page !pt-0">
      <h1
        class="text-2xl md:text-3xl lg:text-4xl mt-4 md:mt-12 font-semibold animate-slidein opacity-0 [--slidein-delay:300ms]"
      >
        Kaloom-TELUS ÉTS Industrial Research Chair in <span class="text-orange-600">DevOps</span>
      </h1>

      <div>
        <ScrollTransition
          transition="vertical"
          opacityEffect="true"
          translateEffect="true"
          moreDelay="true"
        >
          <div class="mt-6 md:mt-12 mb-4">
            <h2 class="text-xl md:text-2xl font-bold">Intelligent DevOps through AI and Analytics </h2>
            <h4 class="text-lg md:text-xl text-stone-500">
              Helping companies react more quickly and effectively
            </h4>
          </div>
        </ScrollTransition>

        <p class="md:text-lg my-4">
          Led by Dr. Francis Bordeleau at
          <a href="https://etsmtl.ca" target="_blank">École de technologie supérieure</a> (ÉTS) and
          industry partners Kaloom and <a href="https://www.telus.com/" target="_blank">TELUS</a>,
          the Kaloom-TELUS ÉTS IRC in DevOps investigate new DevOps engineering approaches
          leveraging data science and AI, to help software organizations design novel IT services
          that are faster and more efficient than traditional methods. This allows them to react
          more quickly to the competitive environment, which is also currently marked by labour
          shortages.
        </p>

        <p class="md:text-lg my-4 hidden">
          The DevOps methodology aims to optimize the workflow by creating value for the end user,
          from the initial idea to the deployment of the functionality. It reduces unnecessary
          tasks, accelerates the time to market for products and services, and increases their
          quality. It also builds on the collaboration between the various parties involved in the
          development of reliable, high-performance products.
        </p>

        <p class="md:text-lg my-4">
          DevOps practices are based on the premise and objective of continuous improvement of
          software products. However, little effort has been devoted to improving DevOps processes
          themselves. It is on this still little explored research path that the Kaloom-TELUS ÉTS
          IRC in DevOps is venturing with research work covering practical challenges related to
          task estimation, code review, testing, merge request mechanism, CI/CD pipelines, and more.
        </p>
      </div>

      <div>
        <ScrollTransition transition="vertical" opacityEffect="true" translateEffect="true">
          <div class="mt-6 md:mt-12 mb-4">
            <h2 class="text-xl md:text-2xl font-bold">DevOps for Agile Network Softwarization</h2>
            <h4 class="text-lg md:text-xl text-stone-500">
              Building innovative DevOps tools to streamline development of SDNs
            </h4>
          </div>
        </ScrollTransition>

        <p class="md:text-lg my-4">
          Software-Defined Networking (SDN) is an approach to network management that uses software
          abstraction to enable dynamic and programmatically efficient network configuration (<a
            href="https://en.wikipedia.org/wiki/Software-defined_networking"
            target="_blank"
            >Wikipedia</a
          >). Building SDNs involves transitioning traditional hardware-based networking functions
          to software-based solutions, which present significant DevOps challenges notably due to
          poor development tooling support, and managing the complexity of highly dynamic and
          distributed systems.
        </p>

        <p class="md:text-lg my-4">
          The Kaloom-TELUS ÉTS IRC in DevOps is taking on these challenges by developing, in
          collaboration with <a href="https://www.telus.com/" target="_blank">TELUS</a>, advanced
          automation tools and frameworks to streamline planning, development, deployment and
          monitoring processes of SDNs. The research efforts aim to facilitate SDN projects
          onboarding, reduce operational overhead, enhance reliability, and accelerate innovation in
          software-defined networking.
        </p>
      </div>

      <div>
        <ScrollTransition transition="vertical" opacityEffect="true" translateEffect="true">
          <div class="mt-6 md:mt-12 mb-4 animate-slidein opacity-0 [--slidein-delay:700ms]">
            <h2 class="text-xl md:text-2xl font-bold">
              Collaboration on Engineering Digital Twins
            </h2>
            <h4 class="text-lg md:text-xl text-stone-500">
              Leveraging DevOps approaches to facilitate DTs engineering
            </h4>
          </div>
        </ScrollTransition>

        <p class="md:text-lg my-4">
          Digital Twins (DTs) are virtual replicas of assets, systems, or processes, that are
          created using real-time data to simulate their behavior and performance. DTs deliver
          insights and enable predictive analysis to help practitioners optimize the design,
          maintenance and operations of their actual twins. Developing DTs poses unique DevOps
          challenges, including the need to support complex and modular software architectures,
          integrate robust deployment pipelines, and ensure thorough testing across heterogeneous
          source code stemming for the variety of expertise areas involved: IoT, data management, 3D
          models, AI models, and more.
        </p>

        <p class="md:text-lg my-4">
          In collaboration with the
          <a
            href="https://www.etsmtl.ca/etudier-a-lets/departements/departement-genie-construction"
            target="_blank"
            >Construction Engineering Department</a
          >
          at ÉTS, the research group addresses these hurdles by designing software frameworks that
          promote modularity and reusability to ultimately enhance the reusability, reliability, and
          security of DT solutions.
        </p>
      </div>

      <div>
        <ScrollTransition transition="vertical" opacityEffect="true" translateEffect="true">
          <div class="mt-6 md:mt-12 mb-4">
            <h2 class="text-xl md:text-2xl font-bold">Research Areas</h2>
          <h4 class="text-lg md:text-xl text-stone-500">
            Extending the boundaries of cross-disciplinary research fields
          </h4>
          </div>
        </ScrollTransition>

        <p class="md:text-lg my-4">
          Specifially, the research group aims at developing methods and tools to measure, analyze,
          and improve various aspects of DevOps processes, as well as to facilitate their deployment
          in various environments. The ongoing research works in the team cover, without being
          exhaustive, the following topics: <br />
        </p>

        <ul class="table md:text-lg space-y-2 my-4 -ml-1.5">
          <li
            v-for="area in areas"
            :key="area"
            class="bg-stone-700 text-white md:bg-orange-700 md:text-orange-50 rounded py-0.5 px-1.5 mx-1.5 inline-block cursor-pointer hover:shadow-lg"
          >
            {{ area }}
          </li>
          <br />
        </ul>
      </div>
    </div>
  </div>
</template>

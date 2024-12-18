<template>
  <div class="page contact mb-20">
    <div id="contact">
      <h1 class="font-bold text-3xl">Contact</h1>
      <div class="mt-4 text-lg grid md:grid-cols-2">
        <div>
          <p>
            Kaloom-TELUS Industrial Research Chair in DevOps <br />
            Laboratoire en Architecture des Systèmes Informatiques (LASI) <br />
            Department of Software and IT Engineering <br />
            École de technologie supérieure | ÉTS Montréal <br />
            1100 Rue Notre-Dame Ouest, Office A-4469, Montréal (Québec), H3C 1K3
          </p>
          <p class="text-lg mt-4">
            <span class="font-bold">Phone:</span> (+1) 514 396-8800, poste 8756
          </p>
          <p class="text-lg mt-4">
            <span class="font-bold">Email:</span> francis.bordeleau@etsmtl.ca
          </p>
        </div>
        <div class="h-72 w-full bg-white mt-8 md:mt-0">
          <iframe
            width="100%"
            height="100%"
            class="rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.7583850373835!2d-73.56490692414718!3d45.494810031396405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a60bbea6fdb%3A0xc92c24a07a78a06b!2s1100%20R.%20Notre%20Dame%20O%20a%204469%2C%20Montr%C3%A9al%2C%20QC%20H3C%201K3!5e0!3m2!1sen!2sca!4v1682787306770!5m2!1sen!2sca"
            style="border: 0"
            allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>

    <div class="mt-16" id="join">
      <h1 class="font-bold text-3xl">Join Us</h1>
      <p class="text-lg mt-4">
        Thanks for considering the Kaloom-TELUS ETS Industrial Research Chair in DevOps. We are
        always looking for highly talented people to work on a variety of topics related to the
        improvement of DevOps processes. If you are interested in joining our research group as a
        graduate student, please take a look at our
        <router-link class="underline" to="/publications">latest publications</router-link>.
      </p>
      <p class="text-lg mt-4">
        As a graduate student, you must have a very strong background in software engineering, a
        good knowledge of DevOps practices and metrics (CI/CD pipelines, Merge Requests, Code Review, Containerization, etc.), and skills in
        Machine Learning technics (Random Forest, Gradient Boosting Trees, Logistic Regression, etc.).
      </p>
      <p class="text-lg mt-4">
        If your research interests strongly overlap the ones of the DevOps IRC research group,
        please contact Pr. Francis Bordeleau via email (francis.bordeleau@etsmtl.ca) with your
        updated resume, transcripts, and a one-page motivation letter.
      </p>
      <p class="text-lg mt-4"></p>
    </div>
  </div>
</template>

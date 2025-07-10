import React from "react";

const ResourcesPage = () => {
  return (
    <div className="my-40 mx-[10%]">
      {/* <h1 className="text-center">Resources Page</h1> */}

      <div className="my-20 mx-[8%] max-w-4xl text-gray-800">
        <h1 className="text-3xl font-bold text-center mb-10">
          Resources for Pet Rescue & Recovery
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">
            🐾 What to Do if You’ve Found a Pet
          </h2>
          <ul className="list-disc pl-6">
            <li>Ensure the pet is in a safe, calm place.</li>
            <li>Take a clear photo and note the exact location.</li>
            <li>
              Check for a collar or tags; bring the pet to a vet or shelter to
              scan for a microchip.
            </li>
            <li>Submit a "Found Pet" report on our platform.</li>
            <li>Share the report on local Facebook and Nextdoor groups.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">
            📍 What to Do if You’ve Lost a Pet
          </h2>
          <ul className="list-disc pl-6">
            <li>File a "Lost Pet" report here so others can help search.</li>
            <li>
              Search your neighborhood thoroughly (especially at dawn and dusk).
            </li>
            <li>Contact local shelters, vets, and animal control agencies.</li>
            <li>
              Post in neighborhood groups and use flyers at busy intersections.
            </li>
            <li>Don't give up—many pets return days or weeks later.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">
            🔎 Pet Recovery Tools & Tips
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <a
                href="https://petcolovelost.org"
                className="text-blue-600 underline"
              >
                Petco Love Lost
              </a>{" "}
              – facial recognition for pets
            </li>
            <li>
              <a
                href="https://www.pawboost.com/"
                className="text-blue-600 underline"
              >
                PawBoost
              </a>{" "}
              – local alert network
            </li>
            <li>
              Use scent trails, recently worn clothes, and treats to lure pets
              back.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">
            📜 City Laws & Reporting Guidelines
          </h2>
          <ul className="list-disc pl-6">
            <li>
              You must report found dogs in NYC within 48 hours to Animal Care
              Centers.
            </li>
            <li>
              Microchipping is highly encouraged and often free at shelters.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🦴 Pet Care Basics</h2>
          <ul className="list-disc pl-6">
            <li>Offer water first — many lost pets are dehydrated.</li>
            <li>
              Feed plain food like rice, boiled chicken, or dry kibble if
              available.
            </li>
            <li>Keep the pet in a quiet, enclosed space until help arrives.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">
            ❓ Frequently Asked Questions (FAQ)
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>What if the pet is injured?</strong> – Call a local vet or
              emergency animal hospital.
            </li>
            <li>
              <strong>Can I keep a found pet?</strong> – Laws vary. You may need
              to file a report and wait a legal holding period.
            </li>
            <li>
              <strong>Do I have to pay to post a report?</strong> – No,
              reporting is 100% free.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ResourcesPage;

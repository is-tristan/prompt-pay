import Heading from "@/components/ui/reusables/heading";

export default function InstagramSection() {

  return (

    <section id="instagram" className="row instagramSection" aria-hidden="true">

      <div className="container noPaddingBottom centered">

        <Heading
          eyebrow="FOLLOW @THEPAYMENTSPECIALIST"
          title="Keep up to date on Instagram"
          className="hasFullStop"
        />

      </div>

      <div className="container centered noPaddingTop">

        <p style={{ textAlign: "center" }}>Instagram feed embed</p>

      </div>

    </section>

  );

}

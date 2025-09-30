// Components
import ProductSection from "./product-section";

// Images
const dashboardImage = "/images/misc/product-dashboard-mockup.png";

export default function ProductDashboard() {
  return (
    <>
      <ProductSection
        rowClassName="productDashboard"
        containerClassName="noPaddingBottom"
        image={dashboardImage}
        imageAlt="Product Dashboard"
        eyebrow="All-in-One Dashboard"
        heading="More power to you"
        listItems={[
          {
            id: 1,
            label: "Track your sales from anywhere",
            description:
              "Access 24/7 from a computer or mobile to track your sales and what's most important to your business.",
          },
          {
            id: 2,
            label: "Stay in the know with inventory",
            description:
              "Assign categories, labels, modifiers and variants to keep your inventory current and organized.",
          },
          {
            id: 3,
            label: "Keep tabs on your team's performance",
            description:
              "Run reports to see how your employees are performing, manage schedules and timesheets, and set permission levels to keep track of your team.",
          },
        ]}
      />
    </>
  );
}

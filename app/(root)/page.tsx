"use client";
import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div>
      <Modal
        isOpen={true}
        onClose={() => {}}
        description="description test"
        title="title test"
      >
        CHILDREN
      </Modal>
    </div>
  );
};

export default SetupPage;

"use client"; // required for Next.js app router

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    child: React.ReactNode,
}

export default function CustomModal({ isOpen, onClose, child }: ModalProps) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex flex-1 items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-2xl p-6 shadow-xl w-8/12 relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                >
                    ✕
                </button>
                {child}
            </div>
        </div>
    );
}

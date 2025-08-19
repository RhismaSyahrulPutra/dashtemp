import React from "react";

const STATUS_CLASSES = {
  online: "avatar-online",
  offline: "avatar-offline",
};

export function Avatar({
  src,
  alt = "avatar",
  size = "w-24",
  shape = "rounded-full",
  ring = false,
  status, // "online" | "offline"
  className = "",
  ignoreStatus = false, // baru
  placeholder = false, // jika true, tampilkan avatar placeholder
  placeholderText = "", // teks di avatar placeholder
}) {
  const statusClass =
    !ignoreStatus && status ? STATUS_CLASSES[status] || "" : "";

  if (placeholder) {
    return (
      <div className={`avatar ${statusClass} avatar-placeholder`.trim()}>
        <div
          className={["bg-neutral text-neutral-content", size, shape, className]
            .filter(Boolean)
            .join(" ")}
        >
          <span className={getPlaceholderFontSize(size)}>
            {placeholderText}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`avatar ${statusClass}`.trim()}>
      <div
        className={[
          size,
          shape,
          ring && "ring ring-primary ring-offset-base-100 ring-offset-2",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

// helper untuk menyesuaikan font-size placeholder berdasarkan size
function getPlaceholderFontSize(size) {
  switch (size) {
    case "w-24":
      return "text-3xl";
    case "w-16":
      return "text-xl";
    case "w-12":
      return "text-sm";
    case "w-8":
      return "text-xs";
    default:
      return "text-sm";
  }
}

export function AvatarGroup({ children, className = "" }) {
  // clone children dan set ignoreStatus = true
  const childrenWithoutStatus = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ignoreStatus: true });
    }
    return child;
  });

  return (
    <div className={`avatar-group -space-x-4 ${className}`.trim()}>
      {childrenWithoutStatus}
    </div>
  );
}

// Wrapper simpel
export function AvatarWithStatus(props) {
  return <Avatar {...props} />;
}

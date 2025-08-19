import React from "react";

const STATUS_CLASSES = {
  online: "avatar-online",
  offline: "avatar-offline",
};

// map untuk ukuran avatar
const SIZE_CLASSES = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-24 h-24",
};

export function Avatar({
  src,
  alt = "avatar",
  size = "md", // sm | md | lg | xl
  shape = "rounded-full",
  ring = false,
  status, // "online" | "offline"
  className = "",
  ignoreStatus = false,
  placeholder = false,
  placeholderText = "",
}) {
  const statusClass =
    !ignoreStatus && status ? STATUS_CLASSES[status] || "" : "";

  const sizeClass = SIZE_CLASSES[size] || size; // fallback kalau langsung kasih w-xx

  if (placeholder) {
    return (
      <div className={`avatar ${statusClass} avatar-placeholder`.trim()}>
        <div
          className={[
            "bg-neutral text-neutral-content",
            sizeClass,
            shape,
            className,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <span className={getPlaceholderFontSize(sizeClass)}>
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
          sizeClass,
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
function getPlaceholderFontSize(sizeClass) {
  switch (sizeClass) {
    case "w-24 h-24":
      return "text-3xl";
    case "w-16 h-16":
      return "text-xl";
    case "w-12 h-12":
      return "text-sm";
    case "w-8 h-8":
      return "text-xs";
    default:
      return "text-sm";
  }
}

export function AvatarGroup({ children, className = "" }) {
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

export function AvatarWithStatus(props) {
  return <Avatar {...props} />;
}

const RestaurantItemSkeleton = () => `
<div class="skeleton-ui skeleton-ui-card" >
  <div class="restaurant__skeleton">

    <div class="flex align-center justify-center">
      <div class="w-100">
        <div class="skeleton-ui-square mb" style="height: 176px"></div>
        <div class="restaurant__skeleton_content">
            <div class="skeleton-ui-line w-90"></div>
            <div class="skeleton-ui-line"></div>
            <div class="skeleton-ui-line"></div>
            <div class="skeleton-ui-line w-20"></div>
            <div class="skeleton-ui-line w-20"></div
        </div>
      </div>
    </div>

  </div>
</div>
`;
const DetailRestaurantSkeleton = () => `
`;

export { RestaurantItemSkeleton, DetailRestaurantSkeleton };

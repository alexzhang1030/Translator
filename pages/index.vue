<template>
  <Suspense>
    <div>
      <AppTitle />
      <div flex justify-between items-center mt-3>
        <Input />
        <Content />
      </div>
    </div>
    <template #fallback>
      <div op50 italic>
        <span animate-pulse>Loading...</span>
      </div>
    </template>
  </Suspense>
</template>

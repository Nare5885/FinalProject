<script setup>

</script>

<template>
<header class="header">
    
    <h1 class="title">Notes Page</h1>
    <div style="width: 106px;"></div> 
    <nav>
        <ul class="nav-list">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/notes">Notes</router-link>
            </li>
        </ul>
    </nav>
</header>
</template>

<style>
.header {
  background-color: rgb(0, 0, 34);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  color: white;
  margin: 0;
  font-size: 1.5rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-list a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
}

.nav-list a:hover {
  color: #e28413;
}

.router-link-active {
  color: #e28413 !important;
}
</style>
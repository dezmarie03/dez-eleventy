(function () {
  tsParticles.load("8ball", {
    autoPlay: true,
    background: {
      color: {
        value: "#240566"
      },
    },
    backgroundMode: {
      enable: true,
      zIndex: 0
    },
    detectRetina: true,
    duration: 0,
    fpsLimit: 60,
    fullscreen: {
      enable: false,
    },
    particles: {
      number: {
        density: {
          enable: true,
          area: 800
        },
        limit: 0,
        value: 3
      },
      size: {
        value: 60,
      },
      shape: {
        image: [
          {
            src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODEiIGhlaWdodD0iNzAiIHZpZXdCb3g9IjAgMCA4MSA3MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM2LjY2MTcgNkMzOC4yMDEzIDMuMzMzMzMgNDIuMDUwMyAzLjMzMzMzIDQzLjU4OTkgNkw3Ni43ODc2IDYzLjVDNzguMzI3MiA2Ni4xNjY3IDc2LjQwMjcgNjkuNSA3My4zMjM1IDY5LjVINi45MjgyQzMuODQ5IDY5LjUgMS45MjQ1IDY2LjE2NjcgMy40NjQxIDYzLjVMMzYuNjYxNyA2WiIgZmlsbD0iIzdEMDdGMiIvPgo8cGF0aCBkPSJNMjguOTQ4OCA0NS40NzA0QzI4LjM4MSA0NS40NzA0IDI3Ljk2MTIgNDUuMjc3NyAyNy42ODk0IDQ0Ljg5MjRDMjcuNDIxNyA0NC41MDcxIDI3LjI4NzggNDMuOTY3NiAyNy4yODc4IDQzLjI3NEMyNy4yODc4IDQyLjU4MDQgMjcuNDIxNyA0Mi4wNDEgMjcuNjg5NCA0MS42NTU2QzI3Ljk2MTIgNDEuMjcwMyAyOC4zODEgNDEuMDc3NiAyOC45NDg4IDQxLjA3NzZDMjkuNTE2NyA0MS4wNzc2IDI5LjkzNDUgNDEuMjcwMyAzMC4yMDIyIDQxLjY1NTZDMzAuNDczOSA0Mi4wNDEgMzAuNjA5OCA0Mi41ODA0IDMwLjYwOTggNDMuMjc0QzMwLjYwOTggNDMuOTY3NiAzMC40NzM5IDQ0LjUwNzEgMzAuMjAyMiA0NC44OTI0QzI5LjkzNDUgNDUuMjc3NyAyOS41MTY3IDQ1LjQ3MDQgMjguOTQ4OCA0NS40NzA0Wk0yOC45NDg4IDQ0LjczNDJDMjkuMjA4NCA0NC43MzQyIDI5LjM4NjkgNDQuNjM4OSAyOS40ODQyIDQ0LjQ0ODNDMjkuNTg1NiA0NC4yNTM2IDI5LjYzNjMgNDMuOTgzOCAyOS42MzYzIDQzLjYzOTFWNDIuOTAyOUMyOS42MzYzIDQyLjU2MjIgMjkuNTg1NiA0Mi4yOTY1IDI5LjQ4NDIgNDIuMTA1OUMyOS4zODY5IDQxLjkxMTIgMjkuMjA4NCA0MS44MTM4IDI4Ljk0ODggNDEuODEzOEMyOC42ODkyIDQxLjgxMzggMjguNTA4NyA0MS45MTEyIDI4LjQwNzMgNDIuMTA1OUMyOC4zMSA0Mi4yOTY1IDI4LjI2MTMgNDIuNTYyMiAyOC4yNjEzIDQyLjkwMjlWNDMuNjQ1MkMyOC4yNjEzIDQzLjk4NTkgMjguMzEgNDQuMjUzNiAyOC40MDczIDQ0LjQ0ODNDMjguNTA4NyA0NC42Mzg5IDI4LjY4OTIgNDQuNzM0MiAyOC45NDg4IDQ0LjczNDJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzIuMDE5IDQxLjE1MDZWNDMuODM5OUMzMi4wMTkgNDMuOTczNyAzMi4wMjMgNDQuMDk3NCAzMi4wMzExIDQ0LjIxMUMzMi4wNDMzIDQ0LjMyMDUgMzIuMDY3NiA0NC40MTM4IDMyLjEwNDEgNDQuNDkwOUMzMi4xNDQ3IDQ0LjU2NzkgMzIuMjAzNSA0NC42Mjg4IDMyLjI4MDYgNDQuNjczNEMzMi4zNTc2IDQ0LjcxMzkgMzIuNDYzMSA0NC43MzQyIDMyLjU5NyA0NC43MzQyQzMyLjczMDggNDQuNzM0MiAzMi44MzYzIDQ0LjcxMzkgMzIuOTEzMyA0NC42NzM0QzMyLjk5MDQgNDQuNjI4OCAzMy4wNDcyIDQ0LjU2NzkgMzMuMDgzNyA0NC40OTA5QzMzLjEyNDIgNDQuNDEzOCAzMy4xNDg2IDQ0LjMyMDUgMzMuMTU2NyA0NC4yMTFDMzMuMTY4OSA0NC4wOTc0IDMzLjE3NDkgNDMuOTczNyAzMy4xNzQ5IDQzLjgzOTlWNDEuMTUwNkgzNC4wODc2VjQzLjcxODJDMzQuMDg3NiA0NC4wMTAyIDM0LjA2NzMgNDQuMjY1NyAzNC4wMjY3IDQ0LjQ4NDhDMzMuOTkwMiA0NC43MDM4IDMzLjkxNzIgNDQuODg2MyAzMy44MDc3IDQ1LjAzMjRDMzMuNjk4MiA0NS4xNzg0IDMzLjU0NjEgNDUuMjg3OSAzMy4zNTE0IDQ1LjM2MDlDMzMuMTU2NyA0NS40MzM5IDMyLjkwNTIgNDUuNDcwNCAzMi41OTcgNDUuNDcwNEMzMi4yODg3IDQ1LjQ3MDQgMzIuMDM3MiA0NS40MzM5IDMxLjg0MjUgNDUuMzYwOUMzMS42NDc4IDQ1LjI4NzkgMzEuNDk1NyA0NS4xNzg0IDMxLjM4NjIgNDUuMDMyNEMzMS4yNzY3IDQ0Ljg4NjMgMzEuMjAxNiA0NC43MDM4IDMxLjE2MTEgNDQuNDg0OEMzMS4xMjQ2IDQ0LjI2NTcgMzEuMTA2MyA0NC4wMTAyIDMxLjEwNjMgNDMuNzE4MlY0MS4xNTA2SDMyLjAxOVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zNi43MDE0IDQxLjg5OVY0NS4zOTc0SDM1Ljc4ODhWNDEuODk5SDM0LjU2NThWNDEuMTUwNkgzNy45MjQzVjQxLjg5OUgzNi43MDE0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTM4LjYyNzcgNDUuMzk3NFY0MS4xNTA2SDM5LjU0NjRWNDQuNjQ5SDQxLjM3MTdWNDUuMzk3NEgzOC42Mjc3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQzLjU0MTMgNDUuNDcwNEM0Mi45NzM1IDQ1LjQ3MDQgNDIuNTUzNyA0NS4yNzc3IDQyLjI4MTkgNDQuODkyNEM0Mi4wMTQyIDQ0LjUwNzEgNDEuODgwNCA0My45Njc2IDQxLjg4MDQgNDMuMjc0QzQxLjg4MDQgNDIuNTgwNCA0Mi4wMTQyIDQyLjA0MSA0Mi4yODE5IDQxLjY1NTZDNDIuNTUzNyA0MS4yNzAzIDQyLjk3MzUgNDEuMDc3NiA0My41NDEzIDQxLjA3NzZDNDQuMTA5MiA0MS4wNzc2IDQ0LjUyNyA0MS4yNzAzIDQ0Ljc5NDcgNDEuNjU1NkM0NS4wNjY0IDQyLjA0MSA0NS4yMDIzIDQyLjU4MDQgNDUuMjAyMyA0My4yNzRDNDUuMjAyMyA0My45Njc2IDQ1LjA2NjQgNDQuNTA3MSA0NC43OTQ3IDQ0Ljg5MjRDNDQuNTI3IDQ1LjI3NzcgNDQuMTA5MiA0NS40NzA0IDQzLjU0MTMgNDUuNDcwNFpNNDMuNTQxMyA0NC43MzQyQzQzLjgwMDkgNDQuNzM0MiA0My45Nzk0IDQ0LjYzODkgNDQuMDc2NyA0NC40NDgzQzQ0LjE3ODEgNDQuMjUzNiA0NC4yMjg4IDQzLjk4MzggNDQuMjI4OCA0My42MzkxVjQyLjkwMjlDNDQuMjI4OCA0Mi41NjIyIDQ0LjE3ODEgNDIuMjk2NSA0NC4wNzY3IDQyLjEwNTlDNDMuOTc5NCA0MS45MTEyIDQzLjgwMDkgNDEuODEzOCA0My41NDEzIDQxLjgxMzhDNDMuMjgxNyA0MS44MTM4IDQzLjEwMTIgNDEuOTExMiA0Mi45OTk4IDQyLjEwNTlDNDIuOTAyNSA0Mi4yOTY1IDQyLjg1MzggNDIuNTYyMiA0Mi44NTM4IDQyLjkwMjlWNDMuNjQ1MkM0Mi44NTM4IDQzLjk4NTkgNDIuOTAyNSA0NC4yNTM2IDQyLjk5OTggNDQuNDQ4M0M0My4xMDEyIDQ0LjYzODkgNDMuMjgxNyA0NC43MzQyIDQzLjU0MTMgNDQuNzM0MloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00Ny4xODk1IDQ1LjQ3MDRDNDYuNjIxNiA0NS40NzA0IDQ2LjIwMTggNDUuMjc3NyA0NS45MyA0NC44OTI0QzQ1LjY2MjMgNDQuNTA3MSA0NS41Mjg1IDQzLjk2NzYgNDUuNTI4NSA0My4yNzRDNDUuNTI4NSA0Mi41ODA0IDQ1LjY2MjMgNDIuMDQxIDQ1LjkzIDQxLjY1NTZDNDYuMjAxOCA0MS4yNzAzIDQ2LjYyMTYgNDEuMDc3NiA0Ny4xODk1IDQxLjA3NzZDNDcuNzU3MyA0MS4wNzc2IDQ4LjE3NTEgNDEuMjcwMyA0OC40NDI4IDQxLjY1NTZDNDguNzE0NiA0Mi4wNDEgNDguODUwNCA0Mi41ODA0IDQ4Ljg1MDQgNDMuMjc0QzQ4Ljg1MDQgNDMuOTY3NiA0OC43MTQ2IDQ0LjUwNzEgNDguNDQyOCA0NC44OTI0QzQ4LjE3NTEgNDUuMjc3NyA0Ny43NTczIDQ1LjQ3MDQgNDcuMTg5NSA0NS40NzA0Wk00Ny4xODk1IDQ0LjczNDJDNDcuNDQ5MSA0NC43MzQyIDQ3LjYyNzUgNDQuNjM4OSA0Ny43MjQ5IDQ0LjQ0ODNDNDcuODI2MyA0NC4yNTM2IDQ3Ljg3NyA0My45ODM4IDQ3Ljg3NyA0My42MzkxVjQyLjkwMjlDNDcuODc3IDQyLjU2MjIgNDcuODI2MyA0Mi4yOTY1IDQ3LjcyNDkgNDIuMTA1OUM0Ny42Mjc1IDQxLjkxMTIgNDcuNDQ5MSA0MS44MTM4IDQ3LjE4OTUgNDEuODEzOEM0Ni45Mjk5IDQxLjgxMzggNDYuNzQ5NCA0MS45MTEyIDQ2LjY0OCA0Mi4xMDU5QzQ2LjU1MDYgNDIuMjk2NSA0Ni41MDIgNDIuNTYyMiA0Ni41MDIgNDIuOTAyOVY0My42NDUyQzQ2LjUwMiA0My45ODU5IDQ2LjU1MDYgNDQuMjUzNiA0Ni42NDggNDQuNDQ4M0M0Ni43NDk0IDQ0LjYzODkgNDYuOTI5OSA0NC43MzQyIDQ3LjE4OTUgNDQuNzM0MloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik01MC43MTU5IDQzLjYyNjlMNTAuMzM4NyA0NC4xNTYyVjQ1LjM5NzRINDkuNDI2MVY0MS4xNTA2SDUwLjMzODdWNDIuOTI3Mkg1MC4zODc0TDUwLjg0OTggNDIuMjIxNUw1MS41OTgxIDQxLjE1MDZINTIuNjIwM0w1MS4zNDg3IDQyLjk0NTVMNTIuNjgxMSA0NS4zOTc0SDUxLjY1MjlMNTAuNzE1OSA0My42MjY5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTM1LjA5NjQgNTIuNzUxM0gzNS4wNDE2QzM1LjAwNTEgNTIuODQwNSAzNC45NjA1IDUyLjkyNTcgMzQuOTA3NyA1My4wMDY4QzM0Ljg1NSA1My4wODggMzQuNzkwMSA1My4xNjEgMzQuNzEzMSA1My4yMjU5QzM0LjYzNiA1My4yODY3IDM0LjU0NDcgNTMuMzM1NCAzNC40MzkzIDUzLjM3MTlDMzQuMzM3OSA1My40MDg0IDM0LjIyMjMgNTMuNDI2NiAzNC4wOTI1IDUzLjQyNjZDMzMuODg1NiA1My40MjY2IDMzLjcwMTEgNTMuMzc4IDMzLjUzODggNTMuMjgwNkMzMy4zODA2IDUzLjE4MzMgMzMuMjQ2OCA1My4wNDEzIDMzLjEzNzMgNTIuODU0N0MzMy4wMjc3IDUyLjY2ODEgMzIuOTQ0NiA1Mi40NDEgMzIuODg3OCA1Mi4xNzMzQzMyLjgzNTEgNTEuOTA1NiAzMi44MDg3IDUxLjYwMzQgMzIuODA4NyA1MS4yNjY4QzMyLjgwODcgNTAuNTQ0OCAzMi45NDA1IDQ5Ljk5MzEgMzMuMjA0MiA0OS42MTE5QzMzLjQ2NzggNDkuMjI2NSAzMy44NzU1IDQ5LjAzMzkgMzQuNDI3MSA0OS4wMzM5QzM0LjY0NjEgNDkuMDMzOSAzNC44Mzg4IDQ5LjA2NDMgMzUuMDA1MSA0OS4xMjUxQzM1LjE3MTQgNDkuMTgxOSAzNS4zMTM0IDQ5LjI2NTEgMzUuNDMxIDQ5LjM3NDZDMzUuNTUyNyA0OS40OCAzNS42NTIgNDkuNjA3OCAzNS43MjkxIDQ5Ljc1NzlDMzUuODA2MiA0OS45MDggMzUuODY3IDUwLjA3NDMgMzUuOTExNiA1MC4yNTY4TDM1LjA1OTkgNTAuNDYzNkMzNS4wMzU1IDUwLjM3NDQgMzUuMDA3MSA1MC4yODkyIDM0Ljk3NDcgNTAuMjA4MUMzNC45NDYzIDUwLjEyMjkgMzQuOTA3NyA1MC4wNDc5IDM0Ljg1OTEgNDkuOTgzQzM0LjgxMDQgNDkuOTE4MSAzNC43NDk2IDQ5Ljg2NzQgMzQuNjc2NSA0OS44MzA5QzM0LjYwMzUgNDkuNzkwMyAzNC41MTQzIDQ5Ljc3IDM0LjQwODggNDkuNzdDMzQuMTc3NiA0OS43NyAzNC4wMTM0IDQ5Ljg2NTQgMzMuOTE2IDUwLjA1NkMzMy44MjI3IDUwLjI0NjYgMzMuNzc2MSA1MC41MTQzIDMzLjc3NjEgNTAuODU5MVY1MS41NTI3QzMzLjc3NjEgNTEuODk3NSAzMy44MjY4IDUyLjE3MzMgMzMuOTI4MiA1Mi4zODAyQzM0LjAzMzcgNTIuNTg3IDM0LjIxODIgNTIuNjkwNSAzNC40ODE5IDUyLjY5MDVDMzQuNjg4NyA1Mi42OTA1IDM0Ljg0MjkgNTIuNjI5NiAzNC45NDQzIDUyLjUwNzlDMzUuMDQ1NyA1Mi4zODYyIDM1LjA5NjQgNTIuMjMwMSAzNS4wOTY0IDUyLjAzOTRWNTEuNzI5MkgzNC4zNzIzVjUxLjA4NDJIMzUuOTExNlY1My4zNTM2SDM1LjA5NjRWNTIuNzUxM1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zOC4wNjkxIDUzLjQyNjZDMzcuNTAxMyA1My40MjY2IDM3LjA4MTUgNTMuMjM0IDM2LjgwOTcgNTIuODQ4NkMzNi41NDIgNTIuNDYzMyAzNi40MDgyIDUxLjkyMzggMzYuNDA4MiA1MS4yMzAzQzM2LjQwODIgNTAuNTM2NyAzNi41NDIgNDkuOTk3MiAzNi44MDk3IDQ5LjYxMTlDMzcuMDgxNSA0OS4yMjY1IDM3LjUwMTMgNDkuMDMzOSAzOC4wNjkxIDQ5LjAzMzlDMzguNjM3IDQ5LjAzMzkgMzkuMDU0OCA0OS4yMjY1IDM5LjMyMjUgNDkuNjExOUMzOS41OTQyIDQ5Ljk5NzIgMzkuNzMwMSA1MC41MzY3IDM5LjczMDEgNTEuMjMwM0MzOS43MzAxIDUxLjkyMzggMzkuNTk0MiA1Mi40NjMzIDM5LjMyMjUgNTIuODQ4NkMzOS4wNTQ4IDUzLjIzNCAzOC42MzcgNTMuNDI2NiAzOC4wNjkxIDUzLjQyNjZaTTM4LjA2OTEgNTIuNjkwNUMzOC4zMjg3IDUyLjY5MDUgMzguNTA3MiA1Mi41OTUxIDM4LjYwNDYgNTIuNDA0NUMzOC43MDYgNTIuMjA5OCAzOC43NTY3IDUxLjk0MDEgMzguNzU2NyA1MS41OTUzVjUwLjg1OTFDMzguNzU2NyA1MC41MTg0IDM4LjcwNiA1MC4yNTI3IDM4LjYwNDYgNTAuMDYyMUMzOC41MDcyIDQ5Ljg2NzQgMzguMzI4NyA0OS43NyAzOC4wNjkxIDQ5Ljc3QzM3LjgwOTYgNDkuNzcgMzcuNjI5MSA0OS44Njc0IDM3LjUyNzcgNTAuMDYyMUMzNy40MzAzIDUwLjI1MjcgMzcuMzgxNiA1MC41MTg0IDM3LjM4MTYgNTAuODU5MVY1MS42MDE0QzM3LjM4MTYgNTEuOTQyMSAzNy40MzAzIDUyLjIwOTggMzcuNTI3NyA1Mi40MDQ1QzM3LjYyOTEgNTIuNTk1MSAzNy44MDk2IDUyLjY5MDUgMzguMDY5MSA1Mi42OTA1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQxLjcxNzMgNTMuNDI2NkM0MS4xNDk0IDUzLjQyNjYgNDAuNzI5NiA1My4yMzQgNDAuNDU3OCA1Mi44NDg2QzQwLjE5MDEgNTIuNDYzMyA0MC4wNTYzIDUxLjkyMzggNDAuMDU2MyA1MS4yMzAzQzQwLjA1NjMgNTAuNTM2NyA0MC4xOTAxIDQ5Ljk5NzIgNDAuNDU3OCA0OS42MTE5QzQwLjcyOTYgNDkuMjI2NSA0MS4xNDk0IDQ5LjAzMzkgNDEuNzE3MyA0OS4wMzM5QzQyLjI4NTEgNDkuMDMzOSA0Mi43MDI5IDQ5LjIyNjUgNDIuOTcwNiA0OS42MTE5QzQzLjI0MjQgNDkuOTk3MiA0My4zNzgzIDUwLjUzNjcgNDMuMzc4MyA1MS4yMzAzQzQzLjM3ODMgNTEuOTIzOCA0My4yNDI0IDUyLjQ2MzMgNDIuOTcwNiA1Mi44NDg2QzQyLjcwMjkgNTMuMjM0IDQyLjI4NTEgNTMuNDI2NiA0MS43MTczIDUzLjQyNjZaTTQxLjcxNzMgNTIuNjkwNUM0MS45NzY5IDUyLjY5MDUgNDIuMTU1MyA1Mi41OTUxIDQyLjI1MjcgNTIuNDA0NUM0Mi4zNTQxIDUyLjIwOTggNDIuNDA0OCA1MS45NDAxIDQyLjQwNDggNTEuNTk1M1Y1MC44NTkxQzQyLjQwNDggNTAuNTE4NCA0Mi4zNTQxIDUwLjI1MjcgNDIuMjUyNyA1MC4wNjIxQzQyLjE1NTMgNDkuODY3NCA0MS45NzY5IDQ5Ljc3IDQxLjcxNzMgNDkuNzdDNDEuNDU3NyA0OS43NyA0MS4yNzcyIDQ5Ljg2NzQgNDEuMTc1OCA1MC4wNjIxQzQxLjA3ODQgNTAuMjUyNyA0MS4wMjk4IDUwLjUxODQgNDEuMDI5OCA1MC44NTkxVjUxLjYwMTRDNDEuMDI5OCA1MS45NDIxIDQxLjA3ODQgNTIuMjA5OCA0MS4xNzU4IDUyLjQwNDVDNDEuMjc3MiA1Mi41OTUxIDQxLjQ1NzcgNTIuNjkwNSA0MS43MTczIDUyLjY5MDVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDMuOTI5NSA0OS4xMDY5SDQ1LjI5ODVDNDUuODcwNCA0OS4xMDY5IDQ2LjI5NDIgNDkuMjg5NCA0Ni41NzAxIDQ5LjY1NDVDNDYuODQ1OSA1MC4wMTk1IDQ2Ljk4MzggNTAuNTQ0OCA0Ni45ODM4IDUxLjIzMDNDNDYuOTgzOCA1MS45MTU3IDQ2Ljg0NTkgNTIuNDQxIDQ2LjU3MDEgNTIuODA2MUM0Ni4yOTQyIDUzLjE3MTEgNDUuODcwNCA1My4zNTM2IDQ1LjI5ODUgNTMuMzUzNkg0My45Mjk1VjQ5LjEwNjlaTTQ1LjIzNzYgNTIuNjM1N0M0NS41MDk0IDUyLjYzNTcgNDUuNzA4MSA1Mi41NDg1IDQ1LjgzMzkgNTIuMzc0MUM0NS45NTk2IDUyLjE5OTcgNDYuMDIyNSA1MS45NDYyIDQ2LjAyMjUgNTEuNjEzNlY1MC44NDA5QzQ2LjAyMjUgNTAuNTEyMyA0NS45NTk2IDUwLjI2MDggNDUuODMzOSA1MC4wODY0QzQ1LjcwODEgNDkuOTEyIDQ1LjUwOTQgNDkuODI0OCA0NS4yMzc2IDQ5LjgyNDhINDQuODNWNTIuNjM1N0g0NS4yMzc2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==",
            width: 80,
            height: 69,
          },
          {
            src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iNzAiIHZpZXdCb3g9IjAgMCA4MCA3MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM2LjUzNTkgNkMzOC4wNzU1IDMuMzMzMzMgNDEuOTI0NSAzLjMzMzMzIDQzLjQ2NDEgNkw3Ni41MzU5IDYzLjI4MkM3OC4wNzU1IDY1Ljk0ODcgNzYuMTUxIDY5LjI4MiA3My4wNzE4IDY5LjI4Mkg2LjkyODJDMy44NDkgNjkuMjgyIDEuOTI0NSA2NS45NDg3IDMuNDY0MSA2My4yODJMMzYuNTM1OSA2WiIgZmlsbD0iIzdEMDdGMiIvPgo8cGF0aCBkPSJNMTkuOTE5OSA0Ni4xNTM3SDIxLjI4NDZDMjEuODU0NyA0Ni4xNTM3IDIyLjI3NzIgNDYuMzM1NiAyMi41NTIyIDQ2LjY5OTVDMjIuODI3MSA0Ny4wNjM0IDIyLjk2NDYgNDcuNTg3IDIyLjk2NDYgNDguMjcwNEMyMi45NjQ2IDQ4Ljk1MzcgMjIuODI3MSA0OS40NzczIDIyLjU1MjIgNDkuODQxMkMyMi4yNzcyIDUwLjIwNTEgMjEuODU0NyA1MC4zODcxIDIxLjI4NDYgNTAuMzg3MUgxOS45MTk5VjQ2LjE1MzdaTTIxLjIyMzkgNDkuNjcxNEMyMS40OTQ4IDQ5LjY3MTQgMjEuNjkzIDQ5LjU4NDUgMjEuODE4MyA0OS40MTA2QzIxLjk0MzYgNDkuMjM2NyAyMi4wMDYzIDQ4Ljk4NCAyMi4wMDYzIDQ4LjY1MjVWNDcuODgyMkMyMi4wMDYzIDQ3LjU1NDcgMjEuOTQzNiA0Ny4zMDQgMjEuODE4MyA0Ny4xMzAxQzIxLjY5MyA0Ni45NTYzIDIxLjQ5NDggNDYuODY5MyAyMS4yMjM5IDQ2Ljg2OTNIMjAuODE3NlY0OS42NzE0SDIxLjIyMzlaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjQuOTg4IDUwLjQ1OTlDMjQuNDIxOSA1MC40NTk5IDI0LjAwMzQgNTAuMjY3OCAyMy43MzI1IDQ5Ljg4MzdDMjMuNDY1NiA0OS40OTk2IDIzLjMzMjIgNDguOTYxOCAyMy4zMzIyIDQ4LjI3MDRDMjMuMzMyMiA0Ny41NzkgMjMuNDY1NiA0Ny4wNDEyIDIzLjczMjUgNDYuNjU3MUMyNC4wMDM0IDQ2LjI3MjkgMjQuNDIxOSA0Ni4wODA5IDI0Ljk4OCA0Ni4wODA5QzI1LjU1NCA0Ni4wODA5IDI1Ljk3MDUgNDYuMjcyOSAyNi4yMzc0IDQ2LjY1NzFDMjYuNTA4MyA0Ny4wNDEyIDI2LjY0MzcgNDcuNTc5IDI2LjY0MzcgNDguMjcwNEMyNi42NDM3IDQ4Ljk2MTggMjYuNTA4MyA0OS40OTk2IDI2LjIzNzQgNDkuODgzN0MyNS45NzA1IDUwLjI2NzggMjUuNTU0IDUwLjQ1OTkgMjQuOTg4IDUwLjQ1OTlaTTI0Ljk4OCA0OS43MjZDMjUuMjQ2NyA0OS43MjYgMjUuNDI0NyA0OS42MzEgMjUuNTIxNyA0OS40NDA5QzI1LjYyMjggNDkuMjQ2OSAyNS42NzMzIDQ4Ljk3OCAyNS42NzMzIDQ4LjYzNDNWNDcuOTAwNEMyNS42NzMzIDQ3LjU2MDggMjUuNjIyOCA0Ny4yOTU5IDI1LjUyMTcgNDcuMTA1OUMyNS40MjQ3IDQ2LjkxMTggMjUuMjQ2NyA0Ni44MTQ4IDI0Ljk4OCA0Ni44MTQ4QzI0LjcyOTIgNDYuODE0OCAyNC41NDkzIDQ2LjkxMTggMjQuNDQ4MiA0Ny4xMDU5QzI0LjM1MTEgNDcuMjk1OSAyNC4zMDI2IDQ3LjU2MDggMjQuMzAyNiA0Ny45MDA0VjQ4LjY0MDNDMjQuMzAyNiA0OC45OCAyNC4zNTExIDQ5LjI0NjkgMjQuNDQ4MiA0OS40NDA5QzI0LjU0OTMgNDkuNjMxIDI0LjcyOTIgNDkuNzI2IDI0Ljk4OCA0OS43MjZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjguMDE4MSA0Ny41NzI5SDI3Ljk1MTRWNTAuMzg3MUgyNy4xNzUxVjQ2LjE1MzdIMjguMjY2OEwyOS4yMzEyIDQ4Ljk2NzlIMjkuMjk3OVY0Ni4xNTM3SDMwLjA3NDJWNTAuMzg3MUgyOC45ODI1TDI4LjAxODEgNDcuNTcyOVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zMS45NDYgNDUuODk4OUgzMy4wOTgzTDMyLjI2MTMgNDcuODc2MUgzMS42MDAyTDMxLjk0NiA0NS44OTg5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTM2LjM1MjkgNDYuODk5N1Y1MC4zODcxSDM1LjQ0MzFWNDYuODk5N0gzNC4yMjQxVjQ2LjE1MzdIMzcuNTcyVjQ2Ljg5OTdIMzYuMzUyOVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00My4yNjg0IDUwLjQ1OTlDNDIuNzAyNCA1MC40NTk5IDQyLjI4MTkgNTAuMjY5OCA0Mi4wMDY5IDQ5Ljg4OThDNDEuNzM2IDQ5LjUwNTYgNDEuNjAwNSA0OC45NjU4IDQxLjYwMDUgNDguMjcwNEM0MS42MDA1IDQ3LjU3NDkgNDEuNzM2IDQ3LjAzNzEgNDIuMDA2OSA0Ni42NTcxQzQyLjI4MTkgNDYuMjcyOSA0Mi43MDI0IDQ2LjA4MDkgNDMuMjY4NCA0Ni4wODA5QzQzLjQ4NjggNDYuMDgwOSA0My42Nzg5IDQ2LjExMTIgNDMuODQ0NiA0Ni4xNzE5QzQ0LjAxNDUgNDYuMjI4NSA0NC4xNiA0Ni4zMDkzIDQ0LjI4MTMgNDYuNDE0NUM0NC40MDI2IDQ2LjUxOTYgNDQuNTAxNyA0Ni42NDcgNDQuNTc4NSA0Ni43OTY2QzQ0LjY1OTQgNDYuOTQ2MiA0NC43MjIgNDcuMTE0IDQ0Ljc2NjUgNDcuM0w0My45MTc0IDQ3LjUwNjJDNDMuODkzMiA0Ny40MDUxIDQzLjg2NDggNDcuMzEyMSA0My44MzI1IDQ3LjIyNzJDNDMuODAwMiA0Ny4xNDIzIDQzLjc1NzcgNDcuMDY5NSA0My43MDUxIDQ3LjAwODhDNDMuNjU2NiA0Ni45NDgyIDQzLjU5MzkgNDYuOTAxNyA0My41MTcxIDQ2Ljg2OTNDNDMuNDQ0MyA0Ni44MzMgNDMuMzU1NCA0Ni44MTQ4IDQzLjI1MDMgNDYuODE0OEM0My4wMDM2IDQ2LjgxNDggNDIuODI3NyA0Ni45MTE4IDQyLjcyMjYgNDcuMTA1OUM0Mi42MjE1IDQ3LjI5NTkgNDIuNTcxIDQ3LjU2MDggNDIuNTcxIDQ3LjkwMDRWNDguNjQwM0M0Mi41NzEgNDguOTggNDIuNjIxNSA0OS4yNDY5IDQyLjcyMjYgNDkuNDQwOUM0Mi44Mjc3IDQ5LjYzMSA0My4wMDM2IDQ5LjcyNiA0My4yNTAzIDQ5LjcyNkM0My40NjA1IDQ5LjcyNiA0My42MTIxIDQ5LjY2MTMgNDMuNzA1MSA0OS41MzE5QzQzLjgwMjIgNDkuNDAyNSA0My44NzI5IDQ5LjIzNjcgNDMuOTE3NCA0OS4wMzQ2TDQ0Ljc2NjUgNDkuMjQwOEM0NC43MjIgNDkuNDI2OCA0NC42NTk0IDQ5LjU5NDYgNDQuNTc4NSA0OS43NDQyQzQ0LjUwMTcgNDkuODkzOCA0NC40MDI2IDUwLjAyMzIgNDQuMjgxMyA1MC4xMzI0QzQ0LjE2IDUwLjIzNzUgNDQuMDE0NSA1MC4zMTg0IDQzLjg0NDYgNTAuMzc1QzQzLjY3ODkgNTAuNDMxNiA0My40ODY4IDUwLjQ1OTkgNDMuMjY4NCA1MC40NTk5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQ2LjgwODEgNTAuNDU5OUM0Ni4yNDIgNTAuNDU5OSA0NS44MjM1IDUwLjI2NzggNDUuNTUyNiA0OS44ODM3QzQ1LjI4NTggNDkuNDk5NiA0NS4xNTIzIDQ4Ljk2MTggNDUuMTUyMyA0OC4yNzA0QzQ1LjE1MjMgNDcuNTc5IDQ1LjI4NTggNDcuMDQxMiA0NS41NTI2IDQ2LjY1NzFDNDUuODIzNSA0Ni4yNzI5IDQ2LjI0MiA0Ni4wODA5IDQ2LjgwODEgNDYuMDgwOUM0Ny4zNzQyIDQ2LjA4MDkgNDcuNzkwNiA0Ni4yNzI5IDQ4LjA1NzUgNDYuNjU3MUM0OC4zMjg0IDQ3LjA0MTIgNDguNDYzOSA0Ny41NzkgNDguNDYzOSA0OC4yNzA0QzQ4LjQ2MzkgNDguOTYxOCA0OC4zMjg0IDQ5LjQ5OTYgNDguMDU3NSA0OS44ODM3QzQ3Ljc5MDYgNTAuMjY3OCA0Ny4zNzQyIDUwLjQ1OTkgNDYuODA4MSA1MC40NTk5Wk00Ni44MDgxIDQ5LjcyNkM0Ny4wNjY5IDQ5LjcyNiA0Ny4yNDQ4IDQ5LjYzMSA0Ny4zNDE4IDQ5LjQ0MDlDNDcuNDQyOSA0OS4yNDY5IDQ3LjQ5MzQgNDguOTc4IDQ3LjQ5MzQgNDguNjM0M1Y0Ny45MDA0QzQ3LjQ5MzQgNDcuNTYwOCA0Ny40NDI5IDQ3LjI5NTkgNDcuMzQxOCA0Ny4xMDU5QzQ3LjI0NDggNDYuOTExOCA0Ny4wNjY5IDQ2LjgxNDggNDYuODA4MSA0Ni44MTQ4QzQ2LjU0OTMgNDYuODE0OCA0Ni4zNjk0IDQ2LjkxMTggNDYuMjY4MyA0Ny4xMDU5QzQ2LjE3MTMgNDcuMjk1OSA0Ni4xMjI3IDQ3LjU2MDggNDYuMTIyNyA0Ny45MDA0VjQ4LjY0MDNDNDYuMTIyNyA0OC45OCA0Ni4xNzEzIDQ5LjI0NjkgNDYuMjY4MyA0OS40NDA5QzQ2LjM2OTQgNDkuNjMxIDQ2LjU0OTMgNDkuNzI2IDQ2LjgwODEgNDkuNzI2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQ5Ljg2ODYgNDYuMTUzN1Y0OC44MzQ0QzQ5Ljg2ODYgNDguOTY3OSA0OS44NzI2IDQ5LjA5MTIgNDkuODgwNyA0OS4yMDQ0QzQ5Ljg5MjkgNDkuMzEzNiA0OS45MTcxIDQ5LjQwNjYgNDkuOTUzNSA0OS40ODM0QzQ5Ljk5MzkgNDkuNTYwMiA1MC4wNTI2IDQ5LjYyMDkgNTAuMTI5NCA0OS42NjUzQzUwLjIwNjIgNDkuNzA1OCA1MC4zMTEzIDQ5LjcyNiA1MC40NDQ4IDQ5LjcyNkM1MC41NzgyIDQ5LjcyNiA1MC42ODMzIDQ5LjcwNTggNTAuNzYwMiA0OS42NjUzQzUwLjgzNyA0OS42MjA5IDUwLjg5MzYgNDkuNTYwMiA1MC45MyA0OS40ODM0QzUwLjk3MDQgNDkuNDA2NiA1MC45OTQ3IDQ5LjMxMzYgNTEuMDAyOCA0OS4yMDQ0QzUxLjAxNDkgNDkuMDkxMiA1MS4wMjEgNDguOTY3OSA1MS4wMjEgNDguODM0NFY0Ni4xNTM3SDUxLjkzMDdWNDguNzEzMUM1MS45MzA3IDQ5LjAwNDMgNTEuOTEwNSA0OS4yNTkgNTEuODcwMSA0OS40NzczQzUxLjgzMzcgNDkuNjk1NyA1MS43NjA5IDQ5Ljg3NzYgNTEuNjUxNyA1MC4wMjMyQzUxLjU0MjYgNTAuMTY4OCA1MS4zOTA5IDUwLjI3NzkgNTEuMTk2OSA1MC4zNTA3QzUxLjAwMjggNTAuNDIzNSA1MC43NTIxIDUwLjQ1OTkgNTAuNDQ0OCA1MC40NTk5QzUwLjEzNzUgNTAuNDU5OSA0OS44ODY4IDUwLjQyMzUgNDkuNjkyNyA1MC4zNTA3QzQ5LjQ5ODYgNTAuMjc3OSA0OS4zNDcgNTAuMTY4OCA0OS4yMzc4IDUwLjAyMzJDNDkuMTI4NyA0OS44Nzc2IDQ5LjA1MzkgNDkuNjk1NyA0OS4wMTM0IDQ5LjQ3NzNDNDguOTc3IDQ5LjI1OSA0OC45NTg4IDQ5LjAwNDMgNDguOTU4OCA0OC43MTMxVjQ2LjE1MzdINDkuODY4NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik01My40NzUgNDcuNTcyOUg1My40MDgyVjUwLjM4NzFINTIuNjMxOVY0Ni4xNTM3SDUzLjcyMzZMNTQuNjg4IDQ4Ljk2NzlINTQuNzU0N1Y0Ni4xNTM3SDU1LjUzMVY1MC4zODcxSDU0LjQzOTNMNTMuNDc1IDQ3LjU3MjlaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNTguMTczIDQ2Ljg5OTdWNTAuMzg3MUg1Ny4yNjMzVjQ2Ljg5OTdINTYuMDQ0MlY0Ni4xNTM3SDU5LjM5MjFWNDYuODk5N0g1OC4xNzNaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzIuMjYxMyA1OC4zOTEyQzMxLjY5NTMgNTguMzkxMiAzMS4yNzY4IDU4LjE5OTEgMzEuMDA1OSA1Ny44MTVDMzAuNzM5IDU3LjQzMDggMzAuNjA1NiA1Ni44OTMxIDMwLjYwNTYgNTYuMjAxN0MzMC42MDU2IDU1LjUxMDIgMzAuNzM5IDU0Ljk3MjUgMzEuMDA1OSA1NC41ODgzQzMxLjI3NjggNTQuMjA0MiAzMS42OTUzIDU0LjAxMjIgMzIuMjYxMyA1NC4wMTIyQzMyLjgyNzQgNTQuMDEyMiAzMy4yNDM5IDU0LjIwNDIgMzMuNTEwOCA1NC41ODgzQzMzLjc4MTcgNTQuOTcyNSAzMy45MTcxIDU1LjUxMDIgMzMuOTE3MSA1Ni4yMDE3QzMzLjkxNzEgNTYuODkzMSAzMy43ODE3IDU3LjQzMDggMzMuNTEwOCA1Ny44MTVDMzMuMjQzOSA1OC4xOTkxIDMyLjgyNzQgNTguMzkxMiAzMi4yNjEzIDU4LjM5MTJaTTMyLjI2MTMgNTcuNjU3M0MzMi41MjAxIDU3LjY1NzMgMzIuNjk4IDU3LjU2MjMgMzIuNzk1MSA1Ny4zNzIyQzMyLjg5NjIgNTcuMTc4MSAzMi45NDY3IDU2LjkwOTIgMzIuOTQ2NyA1Ni41NjU2VjU1LjgzMTdDMzIuOTQ2NyA1NS40OTIgMzIuODk2MiA1NS4yMjcyIDMyLjc5NTEgNTUuMDM3MkMzMi42OTggNTQuODQzMSAzMi41MjAxIDU0Ljc0NiAzMi4yNjEzIDU0Ljc0NkMzMi4wMDI2IDU0Ljc0NiAzMS44MjI2IDU0Ljg0MzEgMzEuNzIxNiA1NS4wMzcyQzMxLjYyNDUgNTUuMjI3MiAzMS41NzYgNTUuNDkyIDMxLjU3NiA1NS44MzE3VjU2LjU3MTZDMzEuNTc2IDU2LjkxMTMgMzEuNjI0NSA1Ny4xNzgxIDMxLjcyMTYgNTcuMzcyMkMzMS44MjI2IDU3LjU2MjMgMzIuMDAyNiA1Ny42NTczIDMyLjI2MTMgNTcuNjU3M1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zNS4yOTE1IDU1LjUwNDJIMzUuMjI0OFY1OC4zMTg0SDM0LjQ0ODVWNTQuMDg0OUgzNS41NDAyTDM2LjUwNDUgNTYuODk5MUgzNi41NzEzVjU0LjA4NDlIMzcuMzQ3NlY1OC4zMTg0SDM2LjI1NTlMMzUuMjkxNSA1NS41MDQyWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQxLjgwNjggNTguMzE4NFY1Ny42NDUxSDQyLjcxNjVWNTQuNzU4Mkg0MS44MDY4VjU0LjA4NDlINDQuNTM2MVY1NC43NTgySDQzLjYyNjNWNTcuNjQ1MUg0NC41MzYxVjU4LjMxODRINDEuODA2OFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00Ny4yNjMgNTQuODMwOVY1OC4zMTg0SDQ2LjM1MzJWNTQuODMwOUg0NS4xMzQxVjU0LjA4NDlINDguNDgyMVY1NC44MzA5SDQ3LjI2M1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=",
            width: 80,
            height: 69,
          },
          {
            src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iNzAiIHZpZXdCb3g9IjAgMCA4MCA3MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM2LjUzNTkgNkMzOC4wNzU1IDMuMzMzMzMgNDEuOTI0NSAzLjMzMzMzIDQzLjQ2NDEgNkw3Ni41MzU5IDYzLjI4MkM3OC4wNzU1IDY1Ljk0ODcgNzYuMTUxIDY5LjI4MiA3My4wNzE4IDY5LjI4Mkg2LjkyODJDMy44NDkgNjkuMjgyIDEuOTI0NSA2NS45NDg3IDMuNDY0MSA2My4yODJMMzYuNTM1OSA2WiIgZmlsbD0iIzdEMDdGMiIvPgo8cGF0aCBkPSJNMzcuMzQzMSA0Mi40NDA3SDM3LjI3NjRWNDUuMjU0OUgzNi41MDAxVjQxLjAyMTVIMzcuNTkxOEwzOC41NTYxIDQzLjgzNTdIMzguNjIyOVY0MS4wMjE1SDM5LjM5OTJWNDUuMjU0OUgzOC4zMDc1TDM3LjM0MzEgNDIuNDQwN1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00MS41ODYzIDQ1LjMyNzdDNDEuMDIwMiA0NS4zMjc3IDQwLjYwMTcgNDUuMTM1NyA0MC4zMzA4IDQ0Ljc1MTVDNDAuMDY0IDQ0LjM2NzQgMzkuOTMwNSA0My44Mjk3IDM5LjkzMDUgNDMuMTM4MkMzOS45MzA1IDQyLjQ0NjggNDAuMDY0IDQxLjkwOSA0MC4zMzA4IDQxLjUyNDlDNDAuNjAxNyA0MS4xNDA4IDQxLjAyMDIgNDAuOTQ4NyA0MS41ODYzIDQwLjk0ODdDNDIuMTUyNCA0MC45NDg3IDQyLjU2ODkgNDEuMTQwOCA0Mi44MzU3IDQxLjUyNDlDNDMuMTA2NiA0MS45MDkgNDMuMjQyMSA0Mi40NDY4IDQzLjI0MjEgNDMuMTM4MkM0My4yNDIxIDQzLjgyOTcgNDMuMTA2NiA0NC4zNjc0IDQyLjgzNTcgNDQuNzUxNUM0Mi41Njg5IDQ1LjEzNTcgNDIuMTUyNCA0NS4zMjc3IDQxLjU4NjMgNDUuMzI3N1pNNDEuNTg2MyA0NC41OTM5QzQxLjg0NTEgNDQuNTkzOSA0Mi4wMjMgNDQuNDk4OCA0Mi4xMiA0NC4zMDg4QzQyLjIyMTEgNDQuMTE0NyA0Mi4yNzE3IDQzLjg0NTggNDIuMjcxNyA0My41MDIxVjQyLjc2ODNDNDIuMjcxNyA0Mi40Mjg2IDQyLjIyMTEgNDIuMTYzOCA0Mi4xMiA0MS45NzM3QzQyLjAyMyA0MS43Nzk2IDQxLjg0NTEgNDEuNjgyNiA0MS41ODYzIDQxLjY4MjZDNDEuMzI3NSA0MS42ODI2IDQxLjE0NzYgNDEuNzc5NiA0MS4wNDY1IDQxLjk3MzdDNDAuOTQ5NSA0Mi4xNjM4IDQwLjkwMSA0Mi40Mjg2IDQwLjkwMSA0Mi43NjgzVjQzLjUwODJDNDAuOTAxIDQzLjg0NzggNDAuOTQ5NSA0NC4xMTQ3IDQxLjA0NjUgNDQuMzA4OEM0MS4xNDc2IDQ0LjQ5ODggNDEuMzI3NSA0NC41OTM5IDQxLjU4NjMgNDQuNTkzOVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zMS4wNjMyIDQ4Ljk1MjhIMzIuNDI3OUMzMi45OTggNDguOTUyOCAzMy40MjA1IDQ5LjEzNDcgMzMuNjk1NSA0OS40OTg2QzMzLjk3MDQgNDkuODYyNiAzNC4xMDc5IDUwLjM4NjIgMzQuMTA3OSA1MS4wNjk1QzM0LjEwNzkgNTEuNzUyOCAzMy45NzA0IDUyLjI3NjUgMzMuNjk1NSA1Mi42NDA0QzMzLjQyMDUgNTMuMDA0MyAzMi45OTggNTMuMTg2MiAzMi40Mjc5IDUzLjE4NjJIMzEuMDYzMlY0OC45NTI4Wk0zMi4zNjcyIDUyLjQ3MDVDMzIuNjM4MSA1Mi40NzA1IDMyLjgzNjMgNTIuMzgzNiAzMi45NjE2IDUyLjIwOTdDMzMuMDg3IDUyLjAzNTkgMzMuMTQ5NiA1MS43ODMyIDMzLjE0OTYgNTEuNDUxNlY1MC42ODEzQzMzLjE0OTYgNTAuMzUzOCAzMy4wODcgNTAuMTAzMSAzMi45NjE2IDQ5LjkyOTNDMzIuODM2MyA0OS43NTU0IDMyLjYzODEgNDkuNjY4NSAzMi4zNjcyIDQ5LjY2ODVIMzEuOTYwOVY1Mi40NzA1SDMyLjM2NzJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzYuMTMxMyA1My4yNTlDMzUuNTY1MiA1My4yNTkgMzUuMTQ2NyA1My4wNjY5IDM0Ljg3NTggNTIuNjgyOEMzNC42MDg5IDUyLjI5ODcgMzQuNDc1NSA1MS43NjA5IDM0LjQ3NTUgNTEuMDY5NUMzNC40NzU1IDUwLjM3ODEgMzQuNjA4OSA0OS44NDAzIDM0Ljg3NTggNDkuNDU2MkMzNS4xNDY3IDQ5LjA3MjEgMzUuNTY1MiA0OC44OCAzNi4xMzEzIDQ4Ljg4QzM2LjY5NzQgNDguODggMzcuMTEzOCA0OS4wNzIxIDM3LjM4MDcgNDkuNDU2MkMzNy42NTE2IDQ5Ljg0MDMgMzcuNzg3MSA1MC4zNzgxIDM3Ljc4NzEgNTEuMDY5NUMzNy43ODcxIDUxLjc2MDkgMzcuNjUxNiA1Mi4yOTg3IDM3LjM4MDcgNTIuNjgyOEMzNy4xMTM4IDUzLjA2NjkgMzYuNjk3NCA1My4yNTkgMzYuMTMxMyA1My4yNTlaTTM2LjEzMTMgNTIuNTI1MUMzNi4zOTAxIDUyLjUyNTEgMzYuNTY4IDUyLjQzMDEgMzYuNjY1IDUyLjI0MDFDMzYuNzY2MSA1Mi4wNDYgMzYuODE2NiA1MS43NzcxIDM2LjgxNjYgNTEuNDMzNFY1MC42OTk1QzM2LjgxNjYgNTAuMzU5OSAzNi43NjYxIDUwLjA5NSAzNi42NjUgNDkuOTA1QzM2LjU2OCA0OS43MTA5IDM2LjM5MDEgNDkuNjEzOSAzNi4xMzEzIDQ5LjYxMzlDMzUuODcyNSA0OS42MTM5IDM1LjY5MjYgNDkuNzEwOSAzNS41OTE1IDQ5LjkwNUMzNS40OTQ0IDUwLjA5NSAzNS40NDU5IDUwLjM1OTkgMzUuNDQ1OSA1MC42OTk1VjUxLjQzOTVDMzUuNDQ1OSA1MS43NzkxIDM1LjQ5NDQgNTIuMDQ2IDM1LjU5MTUgNTIuMjQwMUMzNS42OTI2IDUyLjQzMDEgMzUuODcyNSA1Mi41MjUxIDM2LjEzMTMgNTIuNTI1MVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zOS4xOTE4IDQ4Ljk1MjhWNTEuNjMzNkMzOS4xOTE4IDUxLjc2NyAzOS4xOTU4IDUxLjg5MDMgMzkuMjAzOSA1Mi4wMDM1QzM5LjIxNiA1Mi4xMTI3IDM5LjI0MDMgNTIuMjA1NyAzOS4yNzY3IDUyLjI4MjVDMzkuMzE3MSA1Mi4zNTkzIDM5LjM3NTggNTIuNDIgMzkuNDUyNiA1Mi40NjQ1QzM5LjUyOTQgNTIuNTA0OSAzOS42MzQ1IDUyLjUyNTEgMzkuNzY4IDUyLjUyNTFDMzkuOTAxNCA1Mi41MjUxIDQwLjAwNjUgNTIuNTA0OSA0MC4wODM0IDUyLjQ2NDVDNDAuMTYwMiA1Mi40MiA0MC4yMTY4IDUyLjM1OTMgNDAuMjUzMiA1Mi4yODI1QzQwLjI5MzYgNTIuMjA1NyA0MC4zMTc5IDUyLjExMjcgNDAuMzI2IDUyLjAwMzVDNDAuMzM4MSA1MS44OTAzIDQwLjM0NDIgNTEuNzY3IDQwLjM0NDIgNTEuNjMzNlY0OC45NTI4SDQxLjI1MzlWNTEuNTEyM0M0MS4yNTM5IDUxLjgwMzQgNDEuMjMzNyA1Mi4wNTgxIDQxLjE5MzMgNTIuMjc2NUM0MS4xNTY5IDUyLjQ5NDggNDEuMDg0MSA1Mi42NzY4IDQwLjk3NDkgNTIuODIyM0M0MC44NjU4IDUyLjk2NzkgNDAuNzE0MSA1My4wNzcxIDQwLjUyIDUzLjE0OThDNDAuMzI2IDUzLjIyMjYgNDAuMDc1MyA1My4yNTkgMzkuNzY4IDUzLjI1OUMzOS40NjA3IDUzLjI1OSAzOS4yMSA1My4yMjI2IDM5LjAxNTkgNTMuMTQ5OEMzOC44MjE4IDUzLjA3NzEgMzguNjcwMiA1Mi45Njc5IDM4LjU2MSA1Mi44MjIzQzM4LjQ1MTggNTIuNjc2OCAzOC4zNzcgNTIuNDk0OCAzOC4zMzY2IDUyLjI3NjVDMzguMzAwMiA1Mi4wNTgxIDM4LjI4MiA1MS44MDM0IDM4LjI4MiA1MS41MTIzVjQ4Ljk1MjhIMzkuMTkxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00Mi4wNTIxIDQ4Ljk1MjhINDMuNTM4MUM0My45NTQ2IDQ4Ljk1MjggNDQuMjcyIDQ5LjA1MzkgNDQuNDkwMyA0OS4yNTZDNDQuNzEyNyA0OS40NTgyIDQ0LjgyMzkgNDkuNzMzMiA0NC44MjM5IDUwLjA4MDlDNDQuODIzOSA1MC4zMjM1IDQ0Ljc2MzIgNTAuNTE3NiA0NC42NDE5IDUwLjY2MzFDNDQuNTI0NyA1MC44MDQ3IDQ0LjM1NDkgNTAuOTA3OCA0NC4xMzI1IDUwLjk3MjVWNTEuMDA4OUM0NC4zOTUzIDUxLjA3MzUgNDQuNTk3NSA1MS4xODY4IDQ0LjczOSA1MS4zNDg1QzQ0Ljg4NDUgNTEuNTEwMiA0NC45NTczIDUxLjczNDYgNDQuOTU3MyA1Mi4wMjE3QzQ0Ljk1NzMgNTIuMzc3NSA0NC44NDQxIDUyLjY2MDYgNDQuNjE3NyA1Mi44NzA4QzQ0LjM5NTMgNTMuMDgxMSA0NC4wODE5IDUzLjE4NjIgNDMuNjc3NiA1My4xODYySDQyLjA1MjFWNDguOTUyOFpNNDMuMzk4NiA1Mi41NDk0QzQzLjYxNjkgNTIuNTQ5NCA0My43NzY2IDUyLjUxMyA0My44Nzc3IDUyLjQ0MDJDNDMuOTc4OCA1Mi4zNjc0IDQ0LjAyOTQgNTIuMjM0IDQ0LjAyOTQgNTIuMDM5OVY1MS44NjRDNDQuMDI5NCA1MS42Njk5IDQzLjk3ODggNTEuNTM2NSA0My44Nzc3IDUxLjQ2MzdDNDMuNzc2NiA1MS4zOTEgNDMuNjE2OSA1MS4zNTQ2IDQzLjM5ODYgNTEuMzU0Nkg0Mi45Mzc2VjUyLjU0OTRINDMuMzk4NlpNNDMuMjgzNCA1MC43NDgxQzQzLjQ5NzcgNTAuNzQ4MSA0My42NTMzIDUwLjcxMzcgNDMuNzUwNCA1MC42NDQ5QzQzLjg0NzQgNTAuNTcyMiA0My44OTU5IDUwLjQ0MjggNDMuODk1OSA1MC4yNTY4VjUwLjA3NDhDNDMuODk1OSA0OS44ODg4IDQzLjg0NzQgNDkuNzYxNSA0My43NTA0IDQ5LjY5MjdDNDMuNjUzMyA0OS42MjQgNDMuNDk3NyA0OS41ODk2IDQzLjI4MzQgNDkuNTg5Nkg0Mi45Mzc2VjUwLjc0ODFINDMuMjgzNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00Ny40OTYyIDQ5LjY5ODhWNTMuMTg2Mkg0Ni41ODY1VjQ5LjY5ODhINDUuMzY3NFY0OC45NTI4SDQ4LjcxNTNWNDkuNjk4OEg0Ny40OTYyWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==",
            width: 80,
            height: 69,
          }
        ],
        type: "image",
      },
      rotate: {
        value: 0,
        direction: "clockwise",
        animation: {
          speed: 3,
          enable: true,
        },
      },
      move: {
        bounce: false,
        enable: true,
        speed: 1,
        direction: "none",
        out_mode: "out",
      },
    },
  });
})();

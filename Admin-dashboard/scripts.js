// Pie Chart
const pieCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Total Orders', 'Customer Growth', 'Total Revenue'],
        datasets: [{
            data: [81, 22, 62],
            backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
        }]
    },
    options: {
        responsive: true
    }
});

// Line Chart
const lineCtx = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
            label: 'Orders',
            data: [456, 512, 395, 430, 456, 512, 480],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        responsive: true
    }
});

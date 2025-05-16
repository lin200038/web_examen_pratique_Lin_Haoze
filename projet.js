
const monthlyBtn = document.getElementById('monthlyBtn');
const annualBtn = document.getElementById('annualBtn');
const planCards = document.getElementById('planCards');

const monthlyPlans = `
  <div class="plan-card">
    <div class="plan-title">BASIC</div>
    <div class="plan-price">$9</div>
    <ul class="plan-list">
      <li>3 Projects</li>
      <li>250 objects per project</li>
      <li>One Active User</li>
    </ul>
    <button class="plan-choose">Choose this plan</button>
  </div>
  <div class="plan-card featured">
    <div class="plan-title">PROFESSIONAL</div>
    <div class="plan-price">$29</div>
    <ul class="plan-list">
      <li>20 Projects</li>
      <li>800 objects per project</li>
      <li>10 Active Users</li>
      <li>Team Collaboration</li>
    </ul>
    <button class="plan-choose featured-btn">Choose this plan</button>
  </div>
  <div class="plan-card">
    <div class="plan-title">ENTERPRISE</div>
    <div class="plan-price">$99</div>
    <ul class="plan-list">
      <li>Unlimited Projects</li>
      <li>No object limit</li>
      <li>Unlimited Users</li>
      <li>Team Collaboration</li>
      <li>Priority Support</li>
    </ul>
    <button class="plan-choose">Choose this plan</button>
  </div>
`;

const annualPlans = `
  <div class="plan-card">
    <div class="plan-title">BASIC</div>
    <div class="plan-price">$90</div>
    <ul class="plan-list">
      <li>3 Projects</li>
      <li>250 objects per project</li>
      <li>One Active User</li>
    </ul>
    <button class="plan-choose">Choose this plan</button>
  </div>
  <div class="plan-card featured">
    <div class="plan-title">PROFESSIONAL</div>
    <div class="plan-price">$290</div>
    <ul class="plan-list">
      <li>20 Projects</li>
      <li>800 objects per project</li>
      <li>10 Active Users</li>
      <li>Team Collaboration</li>
    </ul>
    <button class="plan-choose featured-btn">Choose this plan</button>
  </div>
  <div class="plan-card">
    <div class="plan-title">ENTERPRISE</div>
    <div class="plan-price">$990</div>
    <ul class="plan-list">
      <li>Unlimited Projects</li>
      <li>No object limit</li>
      <li>Unlimited Users</li>
      <li>Team Collaboration</li>
      <li>Priority Support</li>
    </ul>
    <button class="plan-choose">Choose this plan</button>
  </div>
`;

monthlyBtn.onclick = function() {
  monthlyBtn.classList.add('active');
  annualBtn.classList.remove('active');
  planCards.innerHTML = monthlyPlans;
};
annualBtn.onclick = function() {
  annualBtn.classList.add('active');
  monthlyBtn.classList.remove('active');
  planCards.innerHTML = annualPlans;
};


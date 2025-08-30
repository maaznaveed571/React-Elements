import React from "react";
import StatusLabel, {
  StatusSuccess,
  StatusWarning,
  StatusDanger,
  StatusInfo,
  OnlineStatus,
  OfflineStatus,
  PendingStatus,
  CompletedStatus,
} from "./status-label";
import {
  CheckCircle,
  AlertCircle,
  XCircle,
  Clock,
  Users,
  Shield,
  Zap,
  TrendingUp,
} from "lucide-react";

const StatusLabelExample: React.FC = () => {
  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Status Label Components
          </h1>
          <p className="text-gray-600">
            A comprehensive showcase of all status label variants and use cases.
          </p>
        </div>

        {/* Basic Variants */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Basic Variants
          </h2>
          <div className="flex flex-wrap gap-3">
            <StatusLabel variant="default">Default</StatusLabel>
            <StatusLabel variant="success">Success</StatusLabel>
            <StatusLabel variant="warning">Warning</StatusLabel>
            <StatusLabel variant="danger">Danger</StatusLabel>
            <StatusLabel variant="info">Info</StatusLabel>
            <StatusLabel variant="secondary">Secondary</StatusLabel>
            <StatusLabel variant="outline">Outline</StatusLabel>
          </div>
        </div>

        {/* Sizes */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <StatusLabel variant="success" size="sm">
              Small
            </StatusLabel>
            <StatusLabel variant="success" size="md">
              Medium
            </StatusLabel>
            <StatusLabel variant="success" size="lg">
              Large
            </StatusLabel>
          </div>
        </div>

        {/* With Icons */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            With Icons
          </h2>
          <div className="flex flex-wrap gap-3">
            <StatusLabel variant="success" icon={CheckCircle}>
              Approved
            </StatusLabel>
            <StatusLabel variant="warning" icon={AlertCircle}>
              Pending Review
            </StatusLabel>
            <StatusLabel variant="danger" icon={XCircle}>
              Rejected
            </StatusLabel>
            <StatusLabel variant="info" icon={Clock}>
              In Progress
            </StatusLabel>
            <StatusLabel variant="secondary" icon={Users}>
              Team Review
            </StatusLabel>
            <StatusLabel variant="default" icon={Shield}>
              Secure
            </StatusLabel>
          </div>
        </div>

        {/* With Dots */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            With Status Dots
          </h2>
          <div className="flex flex-wrap gap-3">
            <StatusLabel variant="success" dot>
              Active
            </StatusLabel>
            <StatusLabel variant="warning" dot>
              Inactive
            </StatusLabel>
            <StatusLabel variant="danger" dot>
              Error
            </StatusLabel>
            <StatusLabel variant="info" dot>
              Processing
            </StatusLabel>
            <StatusLabel variant="default" dot>
              Unknown
            </StatusLabel>
          </div>
        </div>

        {/* Pre-built Components */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Pre-built Status Components
          </h2>
          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Connection Status
              </h3>
              <div className="flex gap-3">
                <OnlineStatus />
                <OfflineStatus />
                <PendingStatus />
                <CompletedStatus />
              </div>
            </div>
          </div>
        </div>

        {/* Shorthand Components */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Shorthand Components
          </h2>
          <div className="flex flex-wrap gap-3">
            <StatusSuccess>Success Message</StatusSuccess>
            <StatusWarning>Warning Message</StatusWarning>
            <StatusDanger>Error Message</StatusDanger>
            <StatusInfo>Info Message</StatusInfo>
          </div>
        </div>

        {/* Real-world Examples */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Real-world Examples
          </h2>
          <div className="space-y-6">
            {/* User Status */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                User Status
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User"
                  />
                  <span className="text-sm font-medium text-gray-900">
                    John Doe
                  </span>
                  <OnlineStatus size="sm" />
                </div>
                <div className="flex items-center gap-3">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b5c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User"
                  />
                  <span className="text-sm font-medium text-gray-900">
                    Jane Smith
                  </span>
                  <OfflineStatus size="sm" />
                </div>
              </div>
            </div>

            {/* Order Status */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Order Status
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-900">Order #12345</span>
                  <StatusLabel variant="success" icon={CheckCircle} size="sm">
                    Delivered
                  </StatusLabel>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-900">Order #12346</span>
                  <StatusLabel variant="info" icon={Clock} size="sm">
                    In Transit
                  </StatusLabel>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-900">Order #12347</span>
                  <StatusLabel variant="warning" icon={AlertCircle} size="sm">
                    Processing
                  </StatusLabel>
                </div>
              </div>
            </div>

            {/* System Status */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                System Status
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-900">API Status</span>
                  <StatusLabel variant="success" dot size="sm">
                    Operational
                  </StatusLabel>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-900">Database</span>
                  <StatusLabel variant="success" dot size="sm">
                    Healthy
                  </StatusLabel>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-900">Cache</span>
                  <StatusLabel variant="warning" dot size="sm">
                    Degraded
                  </StatusLabel>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-900">CDN</span>
                  <StatusLabel variant="danger" dot size="sm">
                    Down
                  </StatusLabel>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Performance Metrics
              </h3>
              <div className="flex flex-wrap gap-3">
                <StatusLabel variant="success" icon={TrendingUp}>
                  High Performance
                </StatusLabel>
                <StatusLabel variant="info" icon={Zap}>
                  Fast Response
                </StatusLabel>
                <StatusLabel variant="secondary" icon={Shield}>
                  Secure
                </StatusLabel>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Example */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Interactive Example
          </h2>
          <div className="space-y-3">
            <p className="text-sm text-gray-600">
              Click on the status labels below to see interactions:
            </p>
            <div className="flex flex-wrap gap-3">
              <StatusLabel
                variant="success"
                onClick={() => alert("Success status clicked!")}
                className="cursor-pointer"
              >
                Clickable Success
              </StatusLabel>
              <StatusLabel
                variant="warning"
                onClick={() => alert("Warning status clicked!")}
                className="cursor-pointer"
              >
                Clickable Warning
              </StatusLabel>
              <StatusLabel
                variant="info"
                icon={Clock}
                onClick={() => alert("Info status with icon clicked!")}
                className="cursor-pointer"
              >
                Clickable Info
              </StatusLabel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusLabelExample;

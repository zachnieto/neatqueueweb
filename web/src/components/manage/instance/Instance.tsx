import Modal from '../../Modal';
import { useEffect, useState } from 'react';
import { classNames } from '../../../util/tailwind';
import globalState from '../../../state';
import {
  deleteInstance,
  extendInstance,
  getInstance,
  getInstanceTypes,
  purchaseInstance,
  rebootInstance,
  startInstance,
  stopInstance,
  updateToken,
} from '../../../services/neatqueue-service';
import { useHookstate } from '@hookstate/core';
import _ from 'lodash';
import {
  InstancePricing,
  PrivateInstance,
  PrivateInstanceState,
  TimeLeft,
} from '../../../types';
import { calculateTimeLeft } from '../../../util/utility';
import ExtendModal from './ExtendModal';
import TerminateModal from './TerminateModal';

const Instance = ({
  guildID,
  setError,
  setSuccess,
  refreshPremiumData,
}: {
  guildID: string;
  setError: (s: string) => void;
  setSuccess: (s: string) => void;
  refreshPremiumData: () => Promise<void>;
}) => {
  const state = useHookstate(globalState);
  const { auth } = state.get();
  const [instanceModalOpen, setInstanceModalOpen] = useState<boolean>(false);
  const [extendModalOpen, setExtendModalOpen] = useState<boolean>(false);
  const [terminateModalOpen, setTerminateModalOpen] = useState<boolean>(false);
  const [instanceTypes, setInstanceTypes] = useState<InstancePricing[]>([]);
  const [selectedInstance, setSelectedInstance] = useState<InstancePricing>();
  const [botToken, setBotToken] = useState<string>();

  const [loading, setLoading] = useState<boolean>(false);
  const [initialLoading, setInitialLoading] = useState<boolean>(true);

  const [privateInstance, setPrivateInstance] = useState<PrivateInstance>();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>();

  const statusColor = {
    running: 'text-green-600',
    online: 'text-green-600',
    stopped: 'text-red-600',
    offline: 'text-red-600',
  };

  useEffect(() => {
    setTimeLeft(recalculateTimeLeft());
    const interval = setInterval(
      () => setTimeLeft(recalculateTimeLeft()),
      60000
    );
    return () => {
      clearInterval(interval);
    };
  }, [privateInstance, privateInstance?.until]);

  useEffect(() => {
    let intervalId: NodeJS.Timer;
    updateInstanceState();
    intervalId = setInterval(updateInstanceState, 10000);

    return () => {
      clearInterval(intervalId);
      setLoading(false);
    };
  }, [privateInstance?.instance]);

  useEffect(() => {
    getInstanceTypes().then(setInstanceTypes);
    updateInstanceState().finally(() => setInitialLoading(false));
  }, []);

  const updateInstanceState = async () => {
    const data = await getInstance(guildID, auth);
    setPrivateInstance(data);
  };

  const handlePurchase = async () => {
    if (!selectedInstance) return;
    setLoading(true);
    try {
      await purchaseInstance(guildID, auth, selectedInstance.price);
      setSuccess('Instance is now being created');
    } catch (e: any) {
      setError(e.response.data.detail);
    }
    setLoading(false);
  };

  const handleExtend = async () => {
    if (!privateInstance) return;

    try {
      await extendInstance(guildID, auth);
      setSuccess(
        `30 days have been added to the instance at a price of ${privateInstance.price} credits`
      );
      await refreshPremiumData();
      await updateInstanceState();
    } catch (e: any) {
      setError(e.response.data.detail);
    }
  };

  const start = async () => {
    try {
      await startInstance(guildID, auth);
      setSuccess('Instance is now starting');
    } catch (e: any) {
      setError(e.response.data.detail);
    }
  };

  const reboot = async () => {
    try {
      await rebootInstance(guildID, auth);
      setSuccess('Instance is now rebooting');
    } catch (e: any) {
      setError(e.response.data.detail);
    }
  };

  const stop = async () => {
    try {
      await stopInstance(guildID, auth);
      setSuccess('Instance is now stopping');
    } catch (e: any) {
      setError(e.response.data.detail);
    }
  };

  const terminate = async () => {
    try {
      const refund = await deleteInstance(guildID, auth);
      setSuccess(
        `Instance has been deleted, and you have been refunded ${refund.toFixed(
          1
        )} credits`
      );
    } catch (e: any) {
      setError(e.response.data.detail);
    }
  };

  const updateBotToken = async () => {
    try {
      await updateToken(guildID, auth, botToken!);
      setBotToken('');
      setSuccess('Bot token has been updated');
    } catch (e: any) {
      setError(e.response.data.detail);
    }
  };

  const recalculateTimeLeft = () => {
    if (!privateInstance?.until) return;
    return calculateTimeLeft(privateInstance.until);
  };

  const components = (
    <div>
      <div className="flex">
        {instanceTypes.map((instance: InstancePricing, i: number) => (
          <div
            key={i}
            className="m-1 max-w-sm rounded overflow-hidden shadow-lg bg-black/25 text-white text-center"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-2xl mb-2">{instance.name}</div>
              <div className="font-bold text-xl mb-2">
                {instance.price} Credits
              </div>
              <button
                onClick={() => setSelectedInstance(instance)}
                className={classNames(
                  'btn-primary',
                  selectedInstance !== instance
                    ? 'opacity-50 hover:opacity-100'
                    : ''
                )}
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="col-span-6 bg-stone-900 rounded shadow-md p-5 grid place-items-center">
        <h1 className="text-3xl">BETA</h1>
        <h1 className="text-3xl">Private Instance</h1>

        {!initialLoading &&
          (!privateInstance || !timeLeft ? (
            <button
              className="btn-primary"
              onClick={() => setInstanceModalOpen(true)}
            >
              Buy
            </button>
          ) : (
            <div>
              <h3 className="text-center">
                For Another {timeLeft.days} Days, {timeLeft.hours} Hours, and{' '}
                {timeLeft.minutes} Minutes
              </h3>

              <div className="flex gap-3 mt-3 justify-center">
                {/*<button onClick={updateInstanceState} className="btn-primary">*/}
                {/*  Refresh Status*/}
                {/*</button>*/}

                <button
                  onClick={() => setExtendModalOpen(true)}
                  className="btn-primary"
                >
                  Extend
                </button>
              </div>

              <h1 className="text-2xl text-center mt-5">
                Instance Status:{' '}
                <span
                  className={
                    statusColor[
                      privateInstance.instance as keyof typeof statusColor
                    ] || 'text-yellow-400'
                  }
                >
                  {_.capitalize(privateInstance.instance)}
                </span>
              </h1>

              <h1 className="text-2xl text-center mb-5">
                Bot Status:{' '}
                <span
                  className={
                    statusColor[privateInstance.bot as keyof typeof statusColor]
                  }
                >
                  {_.capitalize(privateInstance.bot)}
                </span>
              </h1>

              <div className="flex gap-3 justify-center">
                <button
                  onClick={start}
                  disabled={privateInstance.instance !== 'stopped' || loading}
                  className="btn-primary"
                >
                  Start
                </button>

                <button
                  onClick={reboot}
                  disabled={privateInstance.instance !== 'running' || loading}
                  className="btn-primary"
                >
                  Reboot
                </button>

                <button
                  onClick={stop}
                  disabled={privateInstance.instance !== 'running' || loading}
                  className="btn-primary"
                >
                  Stop
                </button>

                <button
                  disabled={loading}
                  onClick={() => setTerminateModalOpen(true)}
                  className="btn-primary"
                >
                  Delete
                </button>
              </div>
              <div className="flex justify-center items-center mt-7 gap-1">
                <h1 className="text-xl">Bot Token: </h1>
                <input
                  onChange={(e) => setBotToken(e.target.value)}
                  value={botToken}
                  className="text-center rounded w-80 text-black px-2"
                />
                <button
                  disabled={loading || !botToken}
                  onClick={updateBotToken}
                  className="btn-primary"
                >
                  Set
                </button>
              </div>
            </div>
          ))}
      </div>

      <Modal
        onSubmit={handlePurchase}
        visible={instanceModalOpen}
        setVisibility={setInstanceModalOpen}
        title="Private Instance"
        submitText="Confirm"
        component={components}
      />

      {privateInstance && (
        <>
          <Modal
            onSubmit={handleExtend}
            visible={extendModalOpen}
            setVisibility={setExtendModalOpen}
            title="Extend Instance?"
            submitText="Confirm"
            component={<ExtendModal price={privateInstance?.price} />}
          />
          <Modal
            onSubmit={terminate}
            visible={terminateModalOpen}
            setVisibility={setTerminateModalOpen}
            title="Delete Instance?"
            submitText="Confirm"
            component={<TerminateModal />}
          />
        </>
      )}
    </>
  );
};

export default Instance;

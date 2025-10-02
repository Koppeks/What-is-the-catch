import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerCreateWithoutMergedIntoInputSchema } from './TriggerCreateWithoutMergedIntoInputSchema';
import { TriggerUncheckedCreateWithoutMergedIntoInputSchema } from './TriggerUncheckedCreateWithoutMergedIntoInputSchema';

export const TriggerCreateOrConnectWithoutMergedIntoInputSchema: z.ZodType<Prisma.TriggerCreateOrConnectWithoutMergedIntoInput> = z.strictObject({
  where: z.lazy(() => TriggerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TriggerCreateWithoutMergedIntoInputSchema), z.lazy(() => TriggerUncheckedCreateWithoutMergedIntoInputSchema) ]),
});

export default TriggerCreateOrConnectWithoutMergedIntoInputSchema;

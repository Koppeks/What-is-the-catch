import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerHitWhereUniqueInputSchema } from './TriggerHitWhereUniqueInputSchema';
import { TriggerHitCreateWithoutClauseInputSchema } from './TriggerHitCreateWithoutClauseInputSchema';
import { TriggerHitUncheckedCreateWithoutClauseInputSchema } from './TriggerHitUncheckedCreateWithoutClauseInputSchema';

export const TriggerHitCreateOrConnectWithoutClauseInputSchema: z.ZodType<Prisma.TriggerHitCreateOrConnectWithoutClauseInput> = z.strictObject({
  where: z.lazy(() => TriggerHitWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TriggerHitCreateWithoutClauseInputSchema), z.lazy(() => TriggerHitUncheckedCreateWithoutClauseInputSchema) ]),
});

export default TriggerHitCreateOrConnectWithoutClauseInputSchema;

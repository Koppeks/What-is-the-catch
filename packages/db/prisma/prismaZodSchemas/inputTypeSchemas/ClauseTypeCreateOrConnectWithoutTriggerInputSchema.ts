import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseTypeWhereUniqueInputSchema } from './ClauseTypeWhereUniqueInputSchema';
import { ClauseTypeCreateWithoutTriggerInputSchema } from './ClauseTypeCreateWithoutTriggerInputSchema';
import { ClauseTypeUncheckedCreateWithoutTriggerInputSchema } from './ClauseTypeUncheckedCreateWithoutTriggerInputSchema';

export const ClauseTypeCreateOrConnectWithoutTriggerInputSchema: z.ZodType<Prisma.ClauseTypeCreateOrConnectWithoutTriggerInput> = z.object({
  where: z.lazy(() => ClauseTypeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClauseTypeCreateWithoutTriggerInputSchema),z.lazy(() => ClauseTypeUncheckedCreateWithoutTriggerInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseTypeCreateOrConnectWithoutTriggerInput>;

export default ClauseTypeCreateOrConnectWithoutTriggerInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerCreateWithoutClauseTypeInputSchema } from './TriggerCreateWithoutClauseTypeInputSchema';
import { TriggerUncheckedCreateWithoutClauseTypeInputSchema } from './TriggerUncheckedCreateWithoutClauseTypeInputSchema';

export const TriggerCreateOrConnectWithoutClauseTypeInputSchema: z.ZodType<Prisma.TriggerCreateOrConnectWithoutClauseTypeInput> = z.object({
  where: z.lazy(() => TriggerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TriggerCreateWithoutClauseTypeInputSchema),z.lazy(() => TriggerUncheckedCreateWithoutClauseTypeInputSchema) ]),
}).strict() as z.ZodType<Prisma.TriggerCreateOrConnectWithoutClauseTypeInput>;

export default TriggerCreateOrConnectWithoutClauseTypeInputSchema;

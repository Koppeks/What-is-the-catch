import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerCreateWithoutClauseCategoryInputSchema } from './TriggerCreateWithoutClauseCategoryInputSchema';
import { TriggerUncheckedCreateWithoutClauseCategoryInputSchema } from './TriggerUncheckedCreateWithoutClauseCategoryInputSchema';

export const TriggerCreateOrConnectWithoutClauseCategoryInputSchema: z.ZodType<Prisma.TriggerCreateOrConnectWithoutClauseCategoryInput> = z.object({
  where: z.lazy(() => TriggerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TriggerCreateWithoutClauseCategoryInputSchema),z.lazy(() => TriggerUncheckedCreateWithoutClauseCategoryInputSchema) ]),
}).strict() as z.ZodType<Prisma.TriggerCreateOrConnectWithoutClauseCategoryInput>;

export default TriggerCreateOrConnectWithoutClauseCategoryInputSchema;

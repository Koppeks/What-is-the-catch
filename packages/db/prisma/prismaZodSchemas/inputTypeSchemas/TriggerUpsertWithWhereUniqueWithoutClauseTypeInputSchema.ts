import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerUpdateWithoutClauseTypeInputSchema } from './TriggerUpdateWithoutClauseTypeInputSchema';
import { TriggerUncheckedUpdateWithoutClauseTypeInputSchema } from './TriggerUncheckedUpdateWithoutClauseTypeInputSchema';
import { TriggerCreateWithoutClauseTypeInputSchema } from './TriggerCreateWithoutClauseTypeInputSchema';
import { TriggerUncheckedCreateWithoutClauseTypeInputSchema } from './TriggerUncheckedCreateWithoutClauseTypeInputSchema';

export const TriggerUpsertWithWhereUniqueWithoutClauseTypeInputSchema: z.ZodType<Prisma.TriggerUpsertWithWhereUniqueWithoutClauseTypeInput> = z.object({
  where: z.lazy(() => TriggerWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TriggerUpdateWithoutClauseTypeInputSchema),z.lazy(() => TriggerUncheckedUpdateWithoutClauseTypeInputSchema) ]),
  create: z.union([ z.lazy(() => TriggerCreateWithoutClauseTypeInputSchema),z.lazy(() => TriggerUncheckedCreateWithoutClauseTypeInputSchema) ]),
}).strict() as z.ZodType<Prisma.TriggerUpsertWithWhereUniqueWithoutClauseTypeInput>;

export default TriggerUpsertWithWhereUniqueWithoutClauseTypeInputSchema;

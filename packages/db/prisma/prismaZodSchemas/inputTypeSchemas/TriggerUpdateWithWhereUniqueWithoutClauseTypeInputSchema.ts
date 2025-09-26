import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerUpdateWithoutClauseTypeInputSchema } from './TriggerUpdateWithoutClauseTypeInputSchema';
import { TriggerUncheckedUpdateWithoutClauseTypeInputSchema } from './TriggerUncheckedUpdateWithoutClauseTypeInputSchema';

export const TriggerUpdateWithWhereUniqueWithoutClauseTypeInputSchema: z.ZodType<Prisma.TriggerUpdateWithWhereUniqueWithoutClauseTypeInput> = z.object({
  where: z.lazy(() => TriggerWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TriggerUpdateWithoutClauseTypeInputSchema),z.lazy(() => TriggerUncheckedUpdateWithoutClauseTypeInputSchema) ]),
}).strict() as z.ZodType<Prisma.TriggerUpdateWithWhereUniqueWithoutClauseTypeInput>;

export default TriggerUpdateWithWhereUniqueWithoutClauseTypeInputSchema;

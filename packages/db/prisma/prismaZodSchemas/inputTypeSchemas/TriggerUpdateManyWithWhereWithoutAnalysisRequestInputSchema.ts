import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerScalarWhereInputSchema } from './TriggerScalarWhereInputSchema';
import { TriggerUpdateManyMutationInputSchema } from './TriggerUpdateManyMutationInputSchema';
import { TriggerUncheckedUpdateManyWithoutAnalysisRequestInputSchema } from './TriggerUncheckedUpdateManyWithoutAnalysisRequestInputSchema';

export const TriggerUpdateManyWithWhereWithoutAnalysisRequestInputSchema: z.ZodType<Prisma.TriggerUpdateManyWithWhereWithoutAnalysisRequestInput> = z.object({
  where: z.lazy(() => TriggerScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TriggerUpdateManyMutationInputSchema),z.lazy(() => TriggerUncheckedUpdateManyWithoutAnalysisRequestInputSchema) ]),
}).strict() as z.ZodType<Prisma.TriggerUpdateManyWithWhereWithoutAnalysisRequestInput>;

export default TriggerUpdateManyWithWhereWithoutAnalysisRequestInputSchema;

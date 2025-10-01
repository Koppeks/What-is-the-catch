import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisCreateWithoutClauseInputSchema } from './ClauseAnalysisCreateWithoutClauseInputSchema';
import { ClauseAnalysisUncheckedCreateWithoutClauseInputSchema } from './ClauseAnalysisUncheckedCreateWithoutClauseInputSchema';
import { ClauseAnalysisCreateOrConnectWithoutClauseInputSchema } from './ClauseAnalysisCreateOrConnectWithoutClauseInputSchema';
import { ClauseAnalysisCreateManyClauseInputEnvelopeSchema } from './ClauseAnalysisCreateManyClauseInputEnvelopeSchema';
import { ClauseAnalysisWhereUniqueInputSchema } from './ClauseAnalysisWhereUniqueInputSchema';

export const ClauseAnalysisUncheckedCreateNestedManyWithoutClauseInputSchema: z.ZodType<Prisma.ClauseAnalysisUncheckedCreateNestedManyWithoutClauseInput> = z.object({
  create: z.union([ z.lazy(() => ClauseAnalysisCreateWithoutClauseInputSchema),z.lazy(() => ClauseAnalysisCreateWithoutClauseInputSchema).array(),z.lazy(() => ClauseAnalysisUncheckedCreateWithoutClauseInputSchema),z.lazy(() => ClauseAnalysisUncheckedCreateWithoutClauseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClauseAnalysisCreateOrConnectWithoutClauseInputSchema),z.lazy(() => ClauseAnalysisCreateOrConnectWithoutClauseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClauseAnalysisCreateManyClauseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ClauseAnalysisWhereUniqueInputSchema),z.lazy(() => ClauseAnalysisWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.ClauseAnalysisUncheckedCreateNestedManyWithoutClauseInput>;

export default ClauseAnalysisUncheckedCreateNestedManyWithoutClauseInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockCreateWithoutDocumentInputSchema } from './BlockCreateWithoutDocumentInputSchema';
import { BlockUncheckedCreateWithoutDocumentInputSchema } from './BlockUncheckedCreateWithoutDocumentInputSchema';
import { BlockCreateOrConnectWithoutDocumentInputSchema } from './BlockCreateOrConnectWithoutDocumentInputSchema';
import { BlockCreateManyDocumentInputEnvelopeSchema } from './BlockCreateManyDocumentInputEnvelopeSchema';
import { BlockWhereUniqueInputSchema } from './BlockWhereUniqueInputSchema';

export const BlockCreateNestedManyWithoutDocumentInputSchema: z.ZodType<Prisma.BlockCreateNestedManyWithoutDocumentInput> = z.strictObject({
  create: z.union([ z.lazy(() => BlockCreateWithoutDocumentInputSchema), z.lazy(() => BlockCreateWithoutDocumentInputSchema).array(), z.lazy(() => BlockUncheckedCreateWithoutDocumentInputSchema), z.lazy(() => BlockUncheckedCreateWithoutDocumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BlockCreateOrConnectWithoutDocumentInputSchema), z.lazy(() => BlockCreateOrConnectWithoutDocumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BlockCreateManyDocumentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BlockWhereUniqueInputSchema), z.lazy(() => BlockWhereUniqueInputSchema).array() ]).optional(),
});

export default BlockCreateNestedManyWithoutDocumentInputSchema;
